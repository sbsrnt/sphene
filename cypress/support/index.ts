type MockRouteOptions = {
  method: string;
  path: string;
  body: any;
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

export function getSelect(selector: string) {
  return cy.getId(`select-${selector}`).firstChild;
}

export function getSelectValue(selector: string, optionIndex: number) {
  return cy
    .getId(`select-${selector}`)
    .get('[class*="-control"]')
    .get('[class*="-menu"]')
    .find('[class*="-option"]')
    .eq(optionIndex)
    .click();
}

export function mockRoute({ method = 'POST', path = '', body }: MockRouteOptions) {
  // @ts-ignore
  return cy.route({
    method,
    url: `http://localhost:4000${path}`,
    body,
  });
}

export function isUrl(path: string) {
  return cy.url().should('eq', `http://localhost:3000${path}`);
}

export function toastMsg(msg: string) {
  return cy.contains(msg);
}

export function signIn(token?: string) {
  // @ts-ignore
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:4000/auth/login',
      body: {
        email: 'test@test.test',
        password: 'password',
      },
    })
    .then((res) => {
      window.localStorage.setItem('token', token || res.body.access_token);
    });
}

export function signOut() {
  return cy
    .getId('signOut')
    .click()
    .then(() => window.localStorage.setItem('token', ''));
}

Cypress.Commands.add('cleanupAndSeedData', cleanupAndSeedData);
Cypress.Commands.add('cleanupData', cleanupData);
Cypress.Commands.add('getId', getId);
Cypress.Commands.add('getSelect', getSelect);
Cypress.Commands.add('getSelectValue', getSelectValue);
Cypress.Commands.add('mockRoute', mockRoute);
Cypress.Commands.add('isUrl', isUrl);
Cypress.Commands.add('toastMsg', toastMsg);
Cypress.Commands.add('signIn', signIn);
Cypress.Commands.add('signOut', signOut);
