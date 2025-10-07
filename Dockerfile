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
ENV DISABLE_ESLINT_PLUGIN=true
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built React app from build stage
COPY --from=build /app/build ./build

# Copy server code
COPY server ./server

# Expose port
EXPOSE 8080

# Start the Node.js server
CMD ["node", "server/index.js"]
