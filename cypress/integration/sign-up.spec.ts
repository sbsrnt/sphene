import PATHS from '../../src/constants/paths';
import { SignInPage, SignUpPage } from '../pages';

export const signUp = () => {
  const signUpPage = new SignUpPage();

  cy.server();
  cy.mockRoute({ method: 'POST', path: '/auth/register' }).as('newUser');

  signUpPage.visit();
  signUpPage.inputEmail.type('test@test.test');
  signUpPage.inputConfirmEmail.type('test@test.test');
  signUpPage.inputPassword.type('password');
  signUpPage.buttonSignUp.click();

  signUpPage.buttonSignUp.should('be.disabled');
  signUpPage.buttonSignUp.should('have.attr', 'aria-disabled', 'true');

  cy.wait('@newUser').should((res) => {
    expect(res.status).to.eq(201);
  });
  cy.isUrl(PATHS.SIGN_IN);
  cy.toastMsg('Confirmation e-mail has been sent. Check your e-mail.');
};

describe('SignUp', () => {
  const signInPage = new SignInPage();
  const signUpPage = new SignUpPage();

  before(() => cy.cleanupData());

  it('redirects to Sign In', () => {
    signUpPage.visit();
    signUpPage.buttonSignIn.click();
    cy.isUrl(PATHS.SIGN_IN);
    signInPage.buttonSignIn.should('be.visible');
  });

  it('Signs Up user', signUp);

  it('throws 422 when trying to register the same user', () => {
    cy.cleanupData();

    signUp();

    signUpPage.buttonSignUp.should('not.be.disabled');
    signUpPage.buttonSignUp.should('not.have.attr', 'aria-disabled', 'true');

    signInPage.buttonSignUp.click();
    signUpPage.inputEmail.type('test@test.test');
    signUpPage.inputConfirmEmail.type('test@test.test');
    signUpPage.inputPassword.type('password');
    signUpPage.buttonSignUp.click();

    cy.wait('@newUser').should((res) => {
      expect(res.status).to.eq(422);
    });

    cy.isUrl(PATHS.SIGN_UP);
    cy.toastMsg('E-mail already in use');
  });
});
