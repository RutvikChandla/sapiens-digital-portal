import { getGreeting } from '../support/app.po';
import { getLocaleConfiguration, getGreetingFromCommon } from '@sapiens-digital/e2e-common';

describe('sample-app-e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // console.log('Locale Configuration:', getLocaleConfiguration());
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains(getLocaleConfiguration());
  });
});
