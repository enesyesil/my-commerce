#!/bin/bash

# Change to the project directory
cd ~/my-commerce/my-spring || exit

# Pull the latest changes from the GitHub repository
echo "Pulling latest changes..."
git pull origin main || exit

# Build the project using Maven
echo "Building project..."
mvn clean install -DskipTests || exit

# Stop any existing Java process running the application
echo "Stopping existing application..."
pkill -f "my-spring-0.0.1-SNAPSHOT.jar" || true

# Start the application in the background
echo "Starting application..."
nohup java -jar target/my-spring-0.0.1-SNAPSHOT.jar > app.log 2>&1 &
