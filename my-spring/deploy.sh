#!/bin/bash

# Ensure we're in the backend project directory
cd ~/my-commerce/my-spring || exit 1

# Pull the latest code from GitHub
echo "Pulling the latest code from GitHub..."
git pull origin main || exit 1

# Install dependencies
echo "Ensuring dependencies are installed..."
sudo dnf install java-17-amazon-corretto -y || exit 1

# Stop any running backend processes
echo "Stopping any running instances of the backend..."
pkill -f "java -jar" || echo "No existing backend process to stop."

# Build the project
echo "Building the backend project..."
./mvnw clean install -DskipTests || exit 1

# Start the backend application
echo "Starting the backend application..."
nohup java -jar target/my-spring-0.0.1-SNAPSHOT.jar > spring.log 2>&1 &

echo "Backend deployment completed successfully."
