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
   gcloud services enable containerregistry.googleapis.com
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

