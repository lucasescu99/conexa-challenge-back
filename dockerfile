# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory inside the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variables
ENV PORT=3000
ENV API_BASE_URL=https://swapi.dev/api

# Expose port 3000
EXPOSE 3000

# Start the application
CMD [ "npm", "run", "start" ]
