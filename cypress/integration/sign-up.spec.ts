import { SignInPage, SignUpPage } from '../pages';

export const signUp = () => {
  const signUpPage = new SignUpPage();

  cy.server();
  cy.mockRoute({ method: 'POST', path: '/auth/register' }).as('newUser');

  signUpPage.visit();
  signUpPage.inputEmail.type('test@test.test');
  signUpPage.inputConfirmEmail.type('test@test.test');
  signUpPage.inputPassword.type('pwd');
  signUpPage.buttonSignUp.click();

  cy.wait('@newUser').should((res) => {
    expect(res.status).to.eq(201);
  });
};

describe('SignUp', () => {
  const signInPage = new SignInPage();
  const signUpPage = new SignUpPage();

  it('redirects to Sign In', () => {
    signUpPage.visit();
    signUpPage.buttonSignIn.click();
    cy.url().should('eq', 'http://localhost:3000/sign-in');
    signInPage.buttonSignIn.should('be.visible');
  });

  it('Signs Up user', signUp);

  it('throws 422 when trying to register the same user', () => {
    signUp();
    signInPage.buttonSignUp.click();
    signUpPage.inputEmail.type('test@test.test');
    signUpPage.inputConfirmEmail.type('test@test.test');
    signUpPage.inputPassword.type('pwd');
    signUpPage.buttonSignUp.click();

    cy.wait('@newUser').should((res) => {
      expect(res.status).to.eq(422);
    });
  });
});
