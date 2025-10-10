#!/bin/bash

# Deploy script for Pubblo Landing Page to Google Cloud Run

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Starting deployment to Google Cloud Run...${NC}"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo -e "${RED}❌ gcloud CLI is not installed. Please install it first.${NC}"
    echo "Visit: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Get project ID (or set it manually)
PROJECT_ID=${PROJECT_ID:-homepage-473608}
gcloud config set project "$PROJECT_ID" >/dev/null
if [ -z "$PROJECT_ID" ]; then
  echo -e "${RED}❌ No Google Cloud project configured.${NC}"
  echo "Run: gcloud config set project YOUR_PROJECT_ID"
  exit 1
fi

echo -e "${GREEN}✓ Using project: $PROJECT_ID${NC}"

# Set variables
SERVICE_NAME="homepage"
REGION="europe-west1"
REPO_NAME="homepage" # Artifact Registry repo name
REGISTRY="$REGION-docker.pkg.dev"
IMAGE_NAME="$REGISTRY/$PROJECT_ID/$REPO_NAME/$SERVICE_NAME"

# Build Docker image
echo -e "${BLUE}🔧 Enabling required APIs...${NC}"
gcloud services enable cloudbuild.googleapis.com run.googleapis.com artifactregistry.googleapis.com >/dev/null

echo -e "${BLUE}🔐 Configuring Docker auth for $REGISTRY...${NC}"
gcloud auth configure-docker $REGISTRY -q >/dev/null

echo -e "${BLUE}📂 Ensuring Artifact Registry repo $REPO_NAME exists...${NC}"
if ! gcloud artifacts repositories describe $REPO_NAME --location=$REGION >/dev/null 2>&1; then
  gcloud artifacts repositories create $REPO_NAME --repository-format=docker --location=$REGION --description "Homepage images" >/dev/null
fi

echo -e "${BLUE}📦 Building Docker image...${NC}"
docker build -t $IMAGE_NAME:latest .

# Push to Google Container Registry
echo -e "${BLUE}☁️  Pushing to Artifact Registry...${NC}"
docker push $IMAGE_NAME:latest

# Deploy to Cloud Run
echo -e "${BLUE}🚢 Deploying to Cloud Run...${NC}"
gcloud run deploy $SERVICE_NAME \
  --image=$IMAGE_NAME:latest \
  --platform=managed \
  --region=$REGION \
  --allow-unauthenticated \
  --port=8080 \
  --memory=512Mi \
  --cpu=1 \
  --min-instances=0 \
  --max-instances=10

echo -e "${GREEN}✅ Deployment complete!${NC}"

# Get the service URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --platform=managed --region=$REGION --format='value(status.url)')
echo -e "${GREEN}🌐 Your app is live at: $SERVICE_URL${NC}"

