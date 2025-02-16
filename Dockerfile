# Dockerfile

# Use the Node.js 18 base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Expose port 8080
EXPOSE 8080

ENV PORT=8080

# Start the application in production mode
CMD ["npm", "run", "start"]