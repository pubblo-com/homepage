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

### Setup (First Time Only)

1. **Authenticate with Google Cloud**
   ```bash
   gcloud auth login
   gcloud auth configure-docker
   ```

2. **Set your project**
   ```bash
   gcloud config set project YOUR_PROJECT_ID
   ```

3. **Enable required APIs**
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable containerregistry.googleapis.com
   ```

### 🎯 Deployment Options

#### Option 1: Using Deploy Script (Recommended)

```bash
# Make script executable (Mac/Linux)
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

On Windows PowerShell:
```powershell
bash deploy.sh
```

#### Option 2: Manual Deployment

```bash
# 1. Build Docker image
docker build -t gcr.io/YOUR_PROJECT_ID/pubblo-landing:latest .

# 2. Push to Google Container Registry
docker push gcr.io/YOUR_PROJECT_ID/pubblo-landing:latest

# 3. Deploy to Cloud Run
gcloud run deploy pubblo-landing \
  --image=gcr.io/YOUR_PROJECT_ID/pubblo-landing:latest \
  --platform=managed \
  --region=europe-north1 \
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
     --service=pubblo-landing \
     --domain=www.pubblo.com \
     --region=europe-north1
   ```

2. **Update DNS records** (as shown in Cloud Console)

### 📊 Monitor & Manage

**View logs:**
```bash
gcloud run services logs read pubblo-landing --region=europe-north1
```

**View service details:**
```bash
gcloud run services describe pubblo-landing --region=europe-north1
```

**Scale settings:**
```bash
gcloud run services update pubblo-landing \
  --min-instances=1 \
  --max-instances=20 \
  --region=europe-north1
```

### 💰 Cost Estimation

Cloud Run pricing (approx):
- **Free tier**: 2 million requests/month
- **After free tier**: ~$0.40 per million requests
- **Memory**: $0.0000025 per GB-second
- **With minimal traffic**: ~$5-10/month

### 🔧 Environment Variables (if needed later)

```bash
gcloud run services update pubblo-landing \
  --update-env-vars API_KEY=your_key \
  --region=europe-north1
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

Would you like me to create a Cloud Function for form handling?

