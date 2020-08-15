export abstract class Page {
  protected url: string;

  protected constructor(url: string) {
    this.url = url;
  }

  public visit() {
    return cy.visit(this.url);
  }
}
