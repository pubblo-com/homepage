# Deployment Guide - Pubblo Landing Page

## 🚀 Deploy to Google Cloud Run

### Prerequisites

1. **Google Cloud Account**
   - Create account at [cloud.google.com](https://cloud.google.com)
   - Create a new project or use existing

2. **Install Google Cloud SDK**
   ```bash
   # Windows: Download from https://cloud.google.com/sdk/docs/install
   # Mac: brew install --cask google-cloud-sdk
   # Linux: See https://cloud.google.com/sdk/docs/install
   ```

3. **Docker Desktop**
   - Install from [docker.com](https://www.docker.com/products/docker-desktop)

4. (Recommended) Using Artifact Registry instead of Container Registry
   - We push images to Artifact Registry in region `europe-west1`.

### Setup (First Time Only)

1. **Authenticate with Google Cloud**
   ```bash
   gcloud auth login
   gcloud auth configure-docker
   ```

2. **Set your project**
   ```bash
   gcloud config set project homepage-473608
   ```

3. **Enable required APIs**
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable artifactregistry.googleapis.com
   ```

### 🎯 Deployment Options (Artifact Registry)

#### Option 1: Using Deploy Script (Recommended)

```bash
# Make script executable (Mac/Linux)
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

On Windows PowerShell (recommended):
```powershell
./deploy.ps1 -ProjectId homepage-473608 -ServiceName homepage -Region europe-west1 -RepoName homepage
```

The Windows deploy script auto-resolves reCAPTCHA when parameters are omitted:

- REACT_APP_RECAPTCHA_SITE_KEY (client build-time)
   - Resolution order: local `.env` → Cloud Run env var → Secret Manager (if bound)
- RECAPTCHA_SECRET (server runtime)
   - If already bound as a Cloud Run Secret, the script skips updates to avoid type conflicts
   - Else: uses parameter if provided → Cloud Run env (literal) → local `.env`

You can still override explicitly:

```powershell
# Force a specific site key into the client bundle at build time
./deploy.ps1 -ProjectId homepage-473608 -ServiceName homepage -Region europe-west1 -RepoName homepage -RecaptchaSiteKey "<SITE_KEY>"

# Provide a literal secret ONLY if not already bound as a Cloud Run Secret
./deploy.ps1 -ProjectId homepage-473608 -ServiceName homepage -Region europe-west1 -RepoName homepage -RecaptchaSecret "<SECRET>"
```

#### Option 2: Manual Deployment

```bash
# 0. Configure Docker auth for Artifact Registry
gcloud auth configure-docker europe-west1-docker.pkg.dev

# 1. Ensure repo exists
gcloud artifacts repositories create homepage --repository-format=docker --location=europe-west1 --description "Homepage images"

# 2. Build Docker image
docker build -t europe-west1-docker.pkg.dev/homepage-473608/homepage/homepage:latest .

# 3. Push to Artifact Registry
docker push europe-west1-docker.pkg.dev/homepage-473608/homepage/homepage:latest

# 4. Deploy to Cloud Run
gcloud run deploy homepage \
   --image=europe-west1-docker.pkg.dev/homepage-473608/homepage/homepage:latest \
   --platform=managed \
   --region=europe-west1 \
   --allow-unauthenticated \
   --port=8080 \
   --memory=512Mi
```

#### Option 3: Automatic Deploy via GitHub (CI/CD)

1. **Connect GitHub to Cloud Build**
   - Go to [Cloud Build Triggers](https://console.cloud.google.com/cloud-build/triggers)
   - Click "Connect Repository"
   - Select your GitHub repo
   - Create trigger with `cloudbuild.yaml`

2. **Every push to `main` will auto-deploy!**

### 🌐 Custom Domain

1. **Map custom domain in Cloud Run**
   ```bash
   gcloud run domain-mappings create \
      --service=homepage \
      --domain=www.pubblo.com \
      --region=europe-west1
   ```

2. **Update DNS records** (as shown in Cloud Console)

### 📊 Monitor & Manage

**View logs:**
```bash
gcloud run services logs read homepage --region=europe-west1
```

**View service details:**
```bash
gcloud run services describe homepage --region=europe-west1
```

**Scale settings:**
```bash
gcloud run services update homepage \
   --min-instances=1 \
   --max-instances=20 \
   --region=europe-west1
```

### 💰 Cost Estimation

Cloud Run pricing (approx):
- **Free tier**: 2 million requests/month
- **After free tier**: ~$0.40 per million requests
- **Memory**: $0.0000025 per GB-second
- **With minimal traffic**: ~$5-10/month

### 🔧 Environment Variables (if needed later)

```bash
gcloud run services update homepage \
   --update-env-vars API_KEY=your_key \
   --region=europe-west1
```

reCAPTCHA configuration used by this app:

- `REACT_APP_RECAPTCHA_SITE_KEY` (client, build-time) — baked into the React bundle
- `RECAPTCHA_SECRET` (server, runtime) — validated on the server

Notes:
- The deploy script auto-resolves both values when parameters are omitted (see above)
- When `RECAPTCHA_SECRET` is bound to Secret Manager in Cloud Run, the script will not attempt to replace it with a literal to avoid type changes

### 🐛 Troubleshooting

**Build fails:**
```bash
# Test build locally
docker build -t test-build .
docker run -p 8080:8080 test-build
# Visit http://localhost:8080
```

**Deployment slow:**
- Cloud Run cold starts take 1-2 seconds
- Consider setting min-instances=1 for production

**Form submissions not working:**
- You'll need to implement a backend API for forms
- Consider Cloud Functions or Firebase for form handling

**reCAPTCHA tests (prod & local):**
- Positive (should pass): submit a form on the site; in DevTools → Network, confirm payload contains `recaptchaToken`; expect 200 `{ success: true }`.
- Negative (should block): POST with empty/invalid token (PowerShell example):

   ```powershell
   Invoke-RestMethod -Method Post -Uri "https://<your-cloud-run-host>/api/contact" -ContentType "application/json" -Body (@{
      name = "Prod Test"; email = "test@example.com"; message = "Hello"; recaptchaToken = ""
   } | ConvertTo-Json)
   ```

- Local helper: start only the server with email disabled and use token generator page

   ```powershell
   $env:NODE_ENV='development'; $env:PORT='8080'; $env:DISABLE_EMAIL='true'; npm run server
   ```
   Open http://localhost:8080/dev/recaptcha and copy a token.

### 📧 Form Handling (Next Steps)

Since you're moving away from Netlify Forms, you'll need:

1. **Backend API for forms** (choose one):
   - Google Cloud Functions
   - Firebase Functions
   - Simple Express.js backend in Cloud Run

2. **Email service** (choose one):
   - SendGrid
   - Mailgun
   - Google Cloud Email API

Note: This project already includes a Node.js Express server that handles forms and serves the built React app. Ensure environment variables are set in Cloud Run if you use MongoDB or SMTP:

- MONGODB_URI
- SMTP_HOST
- SMTP_USERNAME
- SMTP_PASSWORD

You can set them during deploy with:

```bash
gcloud run deploy homepage \
   --image=europe-west1-docker.pkg.dev/homepage-473608/homepage/homepage:latest \
   --region=europe-west1 \
   --allow-unauthenticated \
   --port=8080 \
   --set-env-vars MONGODB_URI=... ,SMTP_HOST=... ,SMTP_USERNAME=... ,SMTP_PASSWORD=...
```

### 🔐 Fix for "Unauthenticated request" error

Felet betyder att Docker inte är autentiserad mot Artifact Registry eller att du pushar till fel registry/region.

Gör så här:

```powershell
gcloud auth login
gcloud config set project homepage-473608
gcloud services enable artifactregistry.googleapis.com
gcloud auth configure-docker europe-west1-docker.pkg.dev

# Bygg och pusha med korrekt image-path
docker build -t europe-west1-docker.pkg.dev/homepage-473608/homepage/homepage:latest .
docker push europe-west1-docker.pkg.dev/homepage-473608/homepage/homepage:latest
```

## Pre-launch countdown page

- New route `/launch` shows a branded countdown to 2025-10-23 10:00 (Stockholm) and once the time is reached, it redirects to https://portal.pubblo.com preserving query/hash.
- The rest of the website remains fully active; only the `/launch` page performs the post-date redirect.


## reCAPTCHA admin setup (domains & settings)

To ensure tokens are issued on all environments, configure your site key in Google reCAPTCHA admin:

1. Open https://www.google.com/recaptcha/admin and select your v3 site key
2. Under Allowed domains, add (one per line):
   - `pubblo.com`
   - `www.pubblo.com`
   - Your Cloud Run host, e.g. `homepage-214327319969.europe-west1.run.app`
   - `localhost` (for local development)
3. Save changes

Actions used in this app: `contact`, `spielpitch`, `homepage` (v3 action names). A default score threshold of 0.5 is enforced server-side; adjust if needed by editing `server/index.js`.

Rollout notes:
- The site key is embedded at build time; re-deploy to update the client bundle if you change keys.
- The secret is read at runtime; use Cloud Run secrets for production.

