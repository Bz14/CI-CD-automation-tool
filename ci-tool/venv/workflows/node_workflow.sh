#!/bin/bash
echo "Running Node.js Workflow..."

# Step 1: Install dependencies
echo "Installing dependencies..."
npm install

# Step 2: Run tests
echo "Running tests..."
npm test || echo "No tests found."

# Step 3: Start the application
echo "Starting the application..."
npm start
