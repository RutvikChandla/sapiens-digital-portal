#!/bin/bash

# This script runs the Cypress tests on BrowserStack
# Usage: ./run-browserstack.sh <username> <access_key> [build_number]

if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Error: BrowserStack username and access key are required"
  echo "Usage: ./run-browserstack.sh <username> <access_key> [build_number]"
  exit 1
fi

# Set BrowserStack credentials
export BROWSERSTACK_USERNAME=$1
export BROWSERSTACK_ACCESS_KEY=$2

export RUST_BACKTRACE=1

# Set build number if provided, otherwise use timestamp
if [ -z "$3" ]; then
  export BUILD_NUMBER=$(date +%Y%m%d_%H%M%S)
else
  export BUILD_NUMBER=$3
fi

# Set flag to indicate we're running on BrowserStack
export BROWSERSTACK=true

# Start the local server in the background
echo "Starting local server..."
npx nx run sample-app:dev &
SERVER_PID=$!

# Give the server some time to start
sleep 10

# Run the tests on BrowserStack
echo "Running tests on BrowserStack..."
npm run e2e:browserstack

# Stop the server
echo "Stopping local server..."
kill $SERVER_PID
