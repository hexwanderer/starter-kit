# Use Node.js 20 as the base image
FROM node:23-alpine

WORKDIR /app

# Copy the package.json and package-lock.json files
COPY . .

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

WORKDIR /app/packages/client

# Expose the port the application will run on
EXPOSE 3001

# Start the application
CMD ["pnpm", "run", "dev"]