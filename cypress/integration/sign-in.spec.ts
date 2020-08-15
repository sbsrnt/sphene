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

  it.only('throws 404 when attempting to Sign In with not existing user', () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: '/auth/login' }).as('existingUser');

    signInPage.visit();
    signInPage.inputEmail.type('t@test.test');
    signInPage.inputPassword.type('pwd');
    signInPage.buttonSignIn.click();

    cy.wait('@existingUser').should((res) => {
      expect(res.status).to.eq(404);
    });
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
  });

  it('Signs In user with proper credentials', () => {
    // Add registration provess before
    cy.server();
    cy.mockRoute({ method: 'POST', path: '/auth/login' }).as('existingUser');

    signInPage.visit();
    signInPage.inputEmail.type('qwe@qwe.qwe');
    signInPage.inputPassword.type('Qwert123');
    signInPage.buttonSignIn.click();

    cy.wait('@existingUser').should((res) => {
      expect(res.status).to.eq(201);
    });
  });
});

export {};
