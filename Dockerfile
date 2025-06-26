# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker cache
COPY package.json package-lock.json ./

# Install dependencies (Node_modules will be generated here)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vite application for production
# This command runs the 'build' script defined in your package.json
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy the built React app from the builder stage into Nginx's default public directory
# The 'build' command in Vite typically outputs to a 'dist' folder.
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove the default Nginx configuration (optional but good practice)
# We'll provide our own in docker-compose.yml
RUN rm /etc/nginx/conf.d/default.conf

# Expose port 80, which Nginx will listen on
EXPOSE 80

# Command to run Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]