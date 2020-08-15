/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.getId('greeting')
     */
    getId(value: string): Chainable<Element>
    mockRoute(value: string): Chainable<Element>
  }
}
