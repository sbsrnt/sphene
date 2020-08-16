import { ForgotPasswordPage, SignInPage, SignUpPage } from '../pages';

describe('SignIn', () => {
  const signInPage = new SignInPage();
  const forgotPasswordPage = new ForgotPasswordPage();
  const signUpPage = new SignUpPage();

  it('redirects to Forgot Password', () => {
    signInPage.visit();
    signInPage.buttonForgotPassword.click();
    cy.url().should('eq', 'http://localhost:3000/forgot-password');
    forgotPasswordPage.buttonRequestReset.should('be.visible');
  });

  it('redirects to Sign Up', () => {
    signInPage.visit();
    signInPage.buttonSignUp.click();
    cy.url().should('eq', 'http://localhost:3000/sign-up');
    signUpPage.buttonSignUp.should('be.visible');
  });

  it('throws 404 when attempting to Sign In with not existing user', () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: '/auth/login' }).as('existingUser');

    signInPage.visit();
    signInPage.inputEmail.type('t@test.test');
    signInPage.inputPassword.type('pwd');
    signInPage.buttonSignIn.click();

    cy.wait('@existingUser').should((res) => {
      expect(res.status).to.eq(404);
    });

    cy.contains("User with given email doesn't exist");
  });

  it('throws 401 when attempting to Sign In with wrong creds', () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: '/auth/login' }).as('existingUser');

    signInPage.visit();
    signInPage.inputEmail.type('test@test.test');
    signInPage.inputPassword.type('pwd');
    signInPage.buttonSignIn.click();

    cy.wait('@existingUser').should((res) => {
      expect(res.status).to.eq(401);
    });

    cy.contains('Unauthorized');
  });

  it('Signs In user with proper credentials', () => {
    // Add registration provess before
    cy.server();
    cy.mockRoute({ method: 'POST', path: '/auth/login' }).as('existingUser');

    signInPage.visit();
    signInPage.inputEmail.type('test@test.test');
    signInPage.inputPassword.type('test');
    signInPage.buttonSignIn.click();

    signInPage.buttonSignIn.should('be.disabled');
    signInPage.buttonForgotPassword.should('have.attr', 'aria-disabled', 'true');
    signInPage.buttonForgotPassword.should('have.attr', 'aria-disabled', 'true');

    cy.wait('@existingUser').should((res) => {
      expect(res.status).to.eq(201);
    });

    signInPage.buttonSignIn.should('not.be.disabled');
    signInPage.buttonForgotPassword.should('have.attr', 'aria-disabled', 'false');
    signInPage.buttonForgotPassword.should('have.attr', 'aria-disabled', 'false');

    cy.contains('Successfully signed in!');
  });
});

export {};
