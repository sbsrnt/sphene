import { RemindersPage } from '../../pages';
import { cleanupAndSeedData, signIn, signOut } from '../../support';
import { fillReminderForm, initReminderCreation } from '../../support/reminder-helpers';

describe('Delete Reminder', () => {
  const remindersPage = new RemindersPage();

  before(() => {
    cleanupAndSeedData();
  });

  beforeEach(() => {
    cy.server();
    signIn();
    remindersPage.visit();
  });

  after(() => signOut());

  it('deletes reminder', () => {
    remindersPage.listReminders.children().should('have.length', 5);
    remindersPage.buttonDeleteReminder(0).click();
    cy.contains('Successfully deleted reminder!');
    remindersPage.listReminders.children().should('have.length', 4);
  });

  it('creates reminder and deletes it right after', () => {
    remindersPage.listReminders.children().should('have.length', 4);
    initReminderCreation(remindersPage);
    remindersPage.buttonCreateReminderPaymentType.click();
    fillReminderForm({ remindersPage });
    remindersPage.listReminders.children().should('have.length', 5);
    remindersPage.buttonDeleteReminder(4).click(); // 0 - 4 where 4 is latest reminder
  });
});
