import PATHS from '../../src/constants/paths';
import { ForgotPasswordPage, SignInPage, SignUpPage } from '../pages';

describe('SignIn', () => {
  const signInPage = new SignInPage();
  const forgotPasswordPage = new ForgotPasswordPage();
  const signUpPage = new SignUpPage();

  before(() => cy.cleanupAndSeedData());

  it('redirects to Forgot Password', () => {
    signInPage.visit();
    signInPage.buttonForgotPassword.click();

    cy.isUrl(PATHS.FORGOT_PASSWORD);
    forgotPasswordPage.buttonRequestReset.should('be.visible');
    forgotPasswordPage.buttonGoBack.click();

    cy.isUrl(PATHS.SIGN_IN);
  });

  it('redirects to Sign Up', () => {
    signInPage.visit();
    signInPage.buttonSignUp.click();

    cy.isUrl(PATHS.SIGN_UP);
    signUpPage.buttonSignUp.should('be.visible');
  });

  it('throws 404 when attempting to Sign In with not existing user', () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: '/auth/login' }).as('existingUser');

    signInPage.visit();
    signInPage.inputEmail.type('qweqwe@qweqwe.qweqwe');
    signInPage.inputPassword.type('password');
    signInPage.buttonSignIn.click();

    cy.wait('@existingUser').should((res) => {
      expect(res.status).to.eq(404);
    });

    cy.toastMsg("User with given email doesn't exist");
  });

  it('throws 401 when attempting to Sign In with wrong creds', () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: '/auth/login' }).as('existingUser');

    signInPage.visit();
    signInPage.inputEmail.type('test@test.test');
    signInPage.inputPassword.type('wrongpassword');
    signInPage.buttonSignIn.click();

    signInPage.buttonSignIn.should('be.disabled');
    signInPage.buttonForgotPassword.should('have.attr', 'aria-disabled', 'true');
    signInPage.buttonSignUp.should('have.attr', 'aria-disabled', 'true');

    cy.wait('@existingUser').should((res) => {
      expect(res.status).to.eq(401);
    });

    signInPage.buttonSignIn.should('not.be.disabled');
    signInPage.buttonForgotPassword.should('not.have.attr', 'aria-disabled', 'true');
    signInPage.buttonSignUp.should('not.have.attr', 'aria-disabled', 'true');

    cy.toastMsg('Unauthorized');
    cy.isUrl(PATHS.SIGN_IN);
  });

  it('Signs In user with proper credentials', () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: '/auth/login' }).as('existingUser');

    signInPage.visit();
    signInPage.inputEmail.type('test@test.test');
    signInPage.inputPassword.type('password');
    signInPage.buttonSignIn.click();

    cy.wait('@existingUser').should((res) => {
      expect(res.status).to.eq(201);
    });
    cy.toastMsg('Successfully signed in!');
    cy.isUrl(PATHS.HOME);

    cy.contains('Hi');
  });
});

export {};
