# Use Node.js 20 as the base image
FROM node:23-alpine

WORKDIR /app

# Copy the package.json and package-lock.json files
COPY . .

# Install dependencies
RUN npm install -g pnpm && pnpm install 

WORKDIR /app/apps/client

# Expose the port the application will run on
EXPOSE 3001

# Start the application
CMD ["pnpm", "run", "dev"]