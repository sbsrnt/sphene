import { Page } from './page';

class ResetPasswordPage extends Page {
  public constructor(param?: string) {
    super(`/reset-password${param || ''}`);
  }

  public get inputNewPassword() {
    return cy.getId('input-new-password');
  }

  public get inputConfirmNewPassword() {
    return cy.getId('input-confirm-new-password');
  }

  public get buttonResetPassword() {
    return cy.getId('button-reset-password');
  }

  public get buttonGoBack() {
    return cy.getId('button-go-back');
  }
}

export default ResetPasswordPage;
