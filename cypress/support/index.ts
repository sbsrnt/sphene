type MockRouteOptions = {
  method: string;
  path: string;
};

export function cleanupAndSeedData() {
  return cy.exec('yarn db:drop && yarn db:seed');
}

export function cleanupData() {
  return cy.exec('yarn db:drop');
}

export function getId(value: string) {
  return cy.get(`[data-cy="${value}"]`);
}

export function mockRoute({ method = 'POST', path = '' }: MockRouteOptions) {
  return cy.route({
    method,
    url: `http://localhost:4000${path}`,
  });
}

export function isUrl(path: string) {
  return cy.url().should('eq', `http://localhost:3000${path}`);
}

export function toastMsg(msg: string) {
  return cy.contains(msg);
}

export function signIn() {
  // @ts-ignore
  return cy.route({
    method: 'POST',
    url: 'http://localhost:4000/auth/login',
    body: {
      email: 'test@test.test',
      password: 'test',
    },
  });
}

Cypress.Commands.add('cleanupAndSeedData', cleanupAndSeedData);
Cypress.Commands.add('cleanupData', cleanupData);
Cypress.Commands.add('getId', getId);
Cypress.Commands.add('mockRoute', mockRoute);
Cypress.Commands.add('isUrl', isUrl);
Cypress.Commands.add('toastMsg', toastMsg);
Cypress.Commands.add('signIn', signIn);
