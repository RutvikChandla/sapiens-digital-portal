import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

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
      // Optional: customize Vite configuration here
      return config;
    },
  },
});
