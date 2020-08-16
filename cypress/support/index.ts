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

Cypress.Commands.add('signIn', () => {
  // @ts-ignore
  return cy.route({
    method: 'POST',
    url: 'http://localhost:4000/auth/login',
    body: {
      email: 'test@test.test',
      password: 'test',
    },
  });
});

export {};
