# Deploy script for Pubblo Homepage to Google Cloud Run (Windows PowerShell)

param(
    [string]$ProjectId = "homepage-473608",
    [string]$ServiceName = "homepage",
    [string]$Region = "europe-west1",
    [string]$RepoName = "homepage",  # Artifact Registry repository name
    [string]$RecaptchaSiteKey,
    [string]$RecaptchaSecret
)

$ErrorActionPreference = "Stop"

Write-Host "`nStarting deployment to Google Cloud Run..." -ForegroundColor Cyan

# Check gcloud
if (-not (Get-Command gcloud -ErrorAction SilentlyContinue)) {
    Write-Error "gcloud CLI is not installed. Install from https://cloud.google.com/sdk/docs/install"
}

# Check Docker
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Write-Error "Docker Desktop is not installed or not in PATH. Install from https://www.docker.com/products/docker-desktop"
}

# Configure project
Write-Host "Using project: $ProjectId" -ForegroundColor Green
& gcloud config set project $ProjectId | Out-Null

# Enable required services (idempotent)
Write-Host "Ensuring required APIs are enabled..." -ForegroundColor Cyan
& gcloud services enable cloudbuild.googleapis.com run.googleapis.com artifactregistry.googleapis.com | Out-Null

# Configure Docker auth for Artifact Registry
$registry = "$Region-docker.pkg.dev"
Write-Host "Configuring Docker auth for $registry" -ForegroundColor Cyan
& gcloud auth configure-docker $registry | Out-Null

# Ensure Artifact Registry repo exists
Write-Host "Ensuring Artifact Registry repo '$RepoName' exists in $Region" -ForegroundColor Cyan
$repoExists = $false
try {
    $name = & gcloud artifacts repositories describe $RepoName --location=$Region --format='value(name)'
    if ($LASTEXITCODE -eq 0 -and -not [string]::IsNullOrWhiteSpace($name)) {
        $repoExists = $true
    }
} catch {
    $repoExists = $false
}
if (-not $repoExists) {
    Write-Host "Creating repository '$RepoName' in $Region" -ForegroundColor Yellow
    & gcloud artifacts repositories create $RepoName --repository-format=docker --location=$Region --description "Homepage images" | Out-Null
}

# Resolve reCAPTCHA configuration if parameters are not provided
Write-Host "Resolving reCAPTCHA configuration..." -ForegroundColor Cyan

# Helper: try read key from .env
function Get-EnvValueFromFile($filePath, $key) {
    if (Test-Path $filePath) {
        $line = (Get-Content $filePath | Where-Object { $_ -match ("^\s*" + [regex]::Escape($key) + "\s*=") } | Select-Object -First 1)
        if ($line) { return ($line -split '=',2)[1].Trim() }
    }
    return $null
}

$envFile = Join-Path $PSScriptRoot ".env"

if (-not $RecaptchaSiteKey) {
    # 1) Try local .env
    $RecaptchaSiteKey = Get-EnvValueFromFile -filePath $envFile -key 'REACT_APP_RECAPTCHA_SITE_KEY'
}

# Will also inspect current Cloud Run service envs for site key and secret config
$svcJson = $null
try {
    $svcJson = (& gcloud run services describe $ServiceName --platform=managed --region=$Region --format=json | ConvertFrom-Json)
} catch {}

$existingEnv = $null
if ($svcJson) {
    try { $existingEnv = $svcJson.spec.template.spec.containers[0].env } catch { $existingEnv = @() }
}

if (-not $RecaptchaSiteKey -and $existingEnv) {
    $siteKeyEnv = $existingEnv | Where-Object { $_.name -eq 'REACT_APP_RECAPTCHA_SITE_KEY' } | Select-Object -First 1
    if ($siteKeyEnv) {
        if ($siteKeyEnv.value) {
            $RecaptchaSiteKey = $siteKeyEnv.value
            Write-Host "Using REACT_APP_RECAPTCHA_SITE_KEY from Cloud Run env (literal)." -ForegroundColor Yellow
        } elseif ($siteKeyEnv.valueFrom -and $siteKeyEnv.valueFrom.secretKeyRef -and $siteKeyEnv.valueFrom.secretKeyRef.name) {
            $secretName = $siteKeyEnv.valueFrom.secretKeyRef.name
            Write-Host "Fetching site key from Secret Manager: $secretName" -ForegroundColor Yellow
            try {
                $RecaptchaSiteKey = (& gcloud secrets versions access latest --secret=$secretName)
            } catch {
                Write-Warning "Failed to access secret '$secretName'. You may lack permissions."
            }
        }
    }
}

# Detect existing RECAPTCHA_SECRET binding type to avoid type conflict
$skipSecretUpdate = $false
$resolvedRecaptchaSecret = $RecaptchaSecret
if ($existingEnv) {
    $secretEnv = $existingEnv | Where-Object { $_.name -eq 'RECAPTCHA_SECRET' } | Select-Object -First 1
    if ($secretEnv) {
        if ($secretEnv.valueFrom -and $secretEnv.valueFrom.secretKeyRef -and $secretEnv.valueFrom.secretKeyRef.name) {
            # It's bound as a secret in Cloud Run; do not override with literal
            $skipSecretUpdate = $true
            Write-Host "RECAPTCHA_SECRET is already configured as a Cloud Run Secret binding. Skipping update to avoid type conflict." -ForegroundColor Yellow
        } elseif ($secretEnv.value) {
            # Literal exists; if no param provided, keep existing
            if (-not $resolvedRecaptchaSecret) {
                $resolvedRecaptchaSecret = $secretEnv.value
                Write-Host "Using existing RECAPTCHA_SECRET from Cloud Run env (literal)." -ForegroundColor Yellow
            }
        }
    }
}

# If still not resolved and not bound as secret, try .env
if (-not $skipSecretUpdate -and -not $resolvedRecaptchaSecret) {
    $fromEnvFile = Get-EnvValueFromFile -filePath $envFile -key 'RECAPTCHA_SECRET'
    if ($fromEnvFile) {
        $resolvedRecaptchaSecret = $fromEnvFile
        Write-Host "Using RECAPTCHA_SECRET from local .env" -ForegroundColor Yellow
    }
}

# Build and push image
$image = "$registry/$ProjectId/$RepoName/${ServiceName}:latest"
Write-Host "Building Docker image: $image" -ForegroundColor Cyan
$buildArgs = @('build','-t',$image)
if ($RecaptchaSiteKey) { $buildArgs += @('--build-arg',"REACT_APP_RECAPTCHA_SITE_KEY=$RecaptchaSiteKey") }
$buildArgs += '.'
& docker @buildArgs
if ($LASTEXITCODE -ne 0) {
    Write-Error "Docker build failed. See output above."
    exit 1
}

Write-Host "Pushing image to Artifact Registry" -ForegroundColor Cyan
& docker push $image
if ($LASTEXITCODE -ne 0) {
    Write-Error "Docker push failed. See output above."
    exit 1
}

# Deploy to Cloud Run (use argument array to avoid line-continuation parsing issues)
Write-Host "Deploying service '$ServiceName' to region '$Region'" -ForegroundColor Cyan
$deployArgs = @(
    'run','deploy',$ServiceName,
    "--image=$image",
    '--platform=managed',
    "--region=$Region",
    '--allow-unauthenticated',
    '--port=8080',
    '--memory=512Mi',
    '--cpu=1',
    '--min-instances=0',
    '--max-instances=10'
)
if ($resolvedRecaptchaSecret) {
    if ($skipSecretUpdate) {
        Write-Warning "RECAPTCHA_SECRET already bound as a secret. Value will not be updated to avoid type change."
    } else {
        $deployArgs += @('--update-env-vars',"RECAPTCHA_SECRET=$resolvedRecaptchaSecret")
    }
}
& gcloud @deployArgs
if ($LASTEXITCODE -ne 0) {
    Write-Error "gcloud run deploy failed. See output above."
    exit 1
}

# Output URL
$serviceUrl = (& gcloud run services describe $ServiceName --platform=managed --region=$Region --format='value(status.url)')
Write-Host "`nDeployment complete!" -ForegroundColor Green
Write-Host "Service URL: $serviceUrl" -ForegroundColor Green
