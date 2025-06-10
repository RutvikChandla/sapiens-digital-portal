import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';


import { getLocaleConfiguration, getGreetingFromCommon } from '@sapiens-digital/e2e-common';

console.log(getLocaleConfiguration());

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'npx nx run sample-app:dev',
        production: 'npx nx run sample-app:preview',
      },
      ciWebServerCommand: 'npx nx run sample-app:preview',
      ciBaseUrl: 'http://localhost:4300',
    }),
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // Handle BrowserStack specific configuration
      const browserstack = process.env.BROWSERSTACK === 'true';

      if (browserstack) {
        // These values would be set by the BrowserStack runner
        config.baseUrl = 'http://localhost:4200';
      }

      return config;
    },
  },
});
