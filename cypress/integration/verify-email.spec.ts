import PATHS from '../../src/constants/paths';
import { SignUpPage, VerifyEmailPage } from '../pages';

let t = '';

describe('VerifyEmail', () => {
  let token = '42';
  const signUpPage = new SignUpPage();
  const verifyEmailPage = new VerifyEmailPage();
  const verifyEmailTokenPage = new VerifyEmailPage(`/${token}`);

  before(() => {
    cy.cleanupData();
  });

  it('redirects to SignIn on Go Back click', () => {
    verifyEmailTokenPage.visit();
    verifyEmailTokenPage.buttonGoBack.click();
    cy.isUrl(PATHS.SIGN_IN);
  });

  it('redirects to SignIn on /verify url', () => {
    verifyEmailPage.visit();
    cy.isUrl(PATHS.VERIFY_EMAIL);
    cy.isUrl(PATHS.HOME);
  });

  it("throws 403 when token doesn't exist", () => {
    cy.server();
    cy.mockRoute({ method: 'GET', path: `/auth${PATHS.VERIFY_EMAIL}/${token}` }).as('user');

    verifyEmailTokenPage.visit();

    cy.wait('@user').should((res) => {
      expect(res.status).to.eq(403);
    });
    cy.contains('Token invalid.');
  });

  describe('Verifies email/user', () => {
    it('creates verify token', () => {
      cy.server();
      cy.mockRoute({ method: 'POST', path: '/auth/register' }).as('newUser');

      signUpPage.visit();
      signUpPage.inputEmail.type('test@test.test');
      signUpPage.inputConfirmEmail.type('test@test.test');
      signUpPage.inputPassword.type('password');
      signUpPage.buttonSignUp.click();

      cy.wait('@newUser').should((res: any) => {
        const { token } = res.response.body;
        t = token;
        expect(res.status).to.eq(201);
      });
    });

    it('with recently created token', () => {
      const emailTokenPage = new VerifyEmailPage(`/${t}`);

      cy.server();
      cy.mockRoute({ method: 'GET', path: `/auth${PATHS.VERIFY_EMAIL}/${t}` }).as('user');

      emailTokenPage.visit();

      cy.wait('@user').should((res) => {
        expect(res.status).to.eq(200);
      });

      cy.contains('Your account has been verified!');
    });

    it('throws 403 when attempting to visit the same token', () => {
      const emailTokenPage = new VerifyEmailPage(`/${t}`);

      cy.server();
      cy.mockRoute({ method: 'GET', path: `/auth${PATHS.VERIFY_EMAIL}/${t}` }).as('user');

      emailTokenPage.visit();

      cy.wait('@user').should((res) => {
        expect(res.status).to.eq(403);
      });

      cy.contains('Token invalid.');
    });
  });
});
