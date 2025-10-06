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
PROJECT_ID=$(gcloud config get-value project)
if [ -z "$PROJECT_ID" ]; then
    echo -e "${RED}❌ No Google Cloud project configured.${NC}"
    echo "Run: gcloud config set project YOUR_PROJECT_ID"
    exit 1
fi

echo -e "${GREEN}✓ Using project: $PROJECT_ID${NC}"

# Set variables
SERVICE_NAME="service-name"
REGION="europe-west1"
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"

# Build Docker image
echo -e "${BLUE}📦 Building Docker image...${NC}"
docker build -t $IMAGE_NAME:latest .

# Push to Google Container Registry
echo -e "${BLUE}☁️  Pushing to Google Container Registry...${NC}"
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

