# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev) for build
RUN npm ci

# Copy source code
COPY . .

# Build the app (skip ESLint)
ARG REACT_APP_RECAPTCHA_SITE_KEY
ENV REACT_APP_RECAPTCHA_SITE_KEY=$REACT_APP_RECAPTCHA_SITE_KEY
ARG REACT_APP_GA_ID
ENV REACT_APP_GA_ID=$REACT_APP_GA_ID
ENV DISABLE_ESLINT_PLUGIN=true
RUN npm run build:docker

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built React app from build stage
COPY --from=build /app/build ./build

# Copy server code and build-time SEO manifest
COPY server ./server
COPY --from=build /app/server/seo-manifest.json ./server/seo-manifest.json

# Expose port
EXPOSE 8080

# Start the Node.js server
CMD ["node", "server/index.js"]
