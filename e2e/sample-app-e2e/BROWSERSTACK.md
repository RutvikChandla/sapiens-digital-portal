# Running Cypress Tests on BrowserStack

This guide will help you run your Cypress end-to-end tests on BrowserStack, which allows you to test your application across multiple browsers and operating systems.

## Prerequisites

- BrowserStack account with access credentials (username and access key)
- Node.js and npm installed

## Setup

The project has already been configured to work with BrowserStack. The main configuration files are:

- `browserstack.json` - Contains BrowserStack-specific configuration
- `sample-app-e2e/cypress.config.ts` - Cypress configuration with BrowserStack support
- `run-browserstack.sh` - Helper script to run tests on BrowserStack

## Running Tests on BrowserStack

There are two ways to run your tests on BrowserStack:

### Option 1: Using the helper script

```bash
./run-browserstack.sh <your_username> <your_access_key> [build_number]
```

Example:

```bash
./run-browserstack.sh myuser1234 abcdefg12345 build-123
```

### Option 2: Using NX commands

```bash
BROWSERSTACK_USERNAME=<your_username> BROWSERSTACK_ACCESS_KEY=<your_access_key> npx nx run sample-app-e2e:browserstack
```

## Configuration

### Browser and OS Configuration

The `browserstack.json` file contains the configuration for the browsers and operating systems to test against. You can modify this file to add or remove browsers, change OS versions, etc.

### Test Specification

By default, all the tests in the `sample-app-e2e/src/e2e` directory with the `.cy.ts` extension will be run. You can modify the `specs` property in the `browserstack.json` file to change this.

### Parallel Testing

The `parallels` property in the `browserstack.json` file controls how many parallel sessions to run. The default is set to 5, but you can adjust this based on your BrowserStack plan.

## Troubleshooting

- If you're getting connection errors, make sure your BrowserStack credentials are correct.
- If tests are failing only on BrowserStack but passing locally, check if there are any browser-specific issues or if the app is properly accessible from BrowserStack's testing infrastructure.
- For more help, refer to [BrowserStack's Cypress documentation](https://www.browserstack.com/docs/automate/cypress).
