FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Install dependencies
RUN npm install -g pnpm serve

# Copy package.json and package-lock.json to the container
COPY package.json ./

COPY pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

# Copy the current directory contents into the container at /app
COPY . .

# Build the application
RUN pnpm run build:prod

# Make port 80 available to the world outside this container
EXPOSE 8081

# Configure command to be executed when container starts
CMD ["npm", "run", "start:prod"]
