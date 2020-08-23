import { Page } from './page';

class VerifyEmailPage extends Page {
  public constructor(token?: string) {
    super(`/verify${token || ''}`);
  }

  public get buttonGoBack() {
    return cy.getId('button-go-back');
  }
}

export default VerifyEmailPage;
