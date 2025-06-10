import { defineConfig } from 'cypress';
import baseConfig from '../cypress.base.config'


export default defineConfig({
  e2e: {
    ...baseConfig.e2e
  },
});
