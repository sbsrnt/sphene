import { cleanupAndSeedData, cleanupData, getId, mockRoute, isUrl, toastMsg } from './index';

/// <reference types="cypress" />
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.getId('greeting')
       */
      getId: typeof getId;

      /**
       * Custom command to mock client route.
       * @example cy.route({ method: 'POST', url: `http://localhost:4000/sign-in`})
       */
      mockRoute: typeof mockRoute;

      /**
       * Custom command to seed database from API project.
       * The requirement is to have api repo and client repo in same IDE projects or as a sibling dirs.
       */
      cleanupAndSeedData: typeof cleanupAndSeedData;

      /**
       * Custom command to drop database from API project.
       * The requirement is to have api repo and client repo in same IDE projects or as a sibling dirs.
       */
      cleanupData: typeof cleanupData;

      /**
       * Custom command to check url.
       * @example cy.url().should('eq', `http://localhost:3000/`)
       */
      isUrl: typeof isUrl;

      /**
       * Custom command just for semantics to highlight toast messages.
       * @example cy.contains('toast message')
       */
      toast: typeof toastMsg;
    }
  }
}
