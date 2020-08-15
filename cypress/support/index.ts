Cypress.Commands.add('getId', (value) => {
  return cy.get(`[data-cy="${value}"]`);
});

type Options = {
  method: string;
  path: string;
};

Cypress.Commands.add('mockRoute', ({ method = 'POST', path = '' }: Options) => {
  return cy.route({
    method,
    url: `http://localhost:4000${path}`,
  });
});

export {};
