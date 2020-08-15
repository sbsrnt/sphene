import { Page } from './page';

class ForgotPasswordPage extends Page {
  public constructor() {
    super('/forgot-password');
  }

  public get inputEmail() {
    return cy.getId('input-email');
  }

  public get buttonRequestReset() {
    return cy.getId('button-request-reset');
  }

  public get buttonGoBack() {
    return cy.getId('button-go-back');
  }
}

export default ForgotPasswordPage;
