import { Page } from './page';

export class SignInPage extends Page {
  public constructor() {
    super('/sign-in');
  }

  public get inputEmail() {
    return cy.getId('input-email');
  }

  public get inputPassword() {
    return cy.getId('input-password');
  }

  public get buttonSignIn() {
    return cy.getId('button-sign-in');
  }

  public get buttonForgotPassword() {
    return cy.getId('button-forgot-password');
  }

  public get buttonSignUp() {
    return cy.getId('button-sign-up');
  }
}

export default SignInPage;
