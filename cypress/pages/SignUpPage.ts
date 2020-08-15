import { Page } from './page';

export class SignUpPage extends Page {
  public constructor() {
    super('/sign-up');
  }

  public get inputEmail() {
    return cy.getId('input-email');
  }

  public get inputConfirmEmail() {
    return cy.getId('input-confirm-email');
  }

  public get inputPassword() {
    return cy.getId('input-password');
  }

  public get buttonSignUp() {
    return cy.getId('button-sign-up');
  }

  public get buttonSignIn() {
    return cy.getId('button-sign-in');
  }
}

export default SignUpPage;
