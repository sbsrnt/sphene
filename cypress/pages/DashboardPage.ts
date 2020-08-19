import { Page } from './page';

class DashboardPage extends Page {
  public constructor() {
    super('/');
  }

  public get welcomeHeader() {
    return cy.contains('Hi');
  }
}

export default DashboardPage;
