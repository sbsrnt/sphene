import { RemindersPage } from '../../pages';
import { cleanupAndSeedData, signIn, signOut } from '../../support';
import { fillReminderForm, initReminderUpdate, testReminder } from './helpers';

describe('Update Reminder', () => {
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

  it('updates reminder type', () => {
    initReminderUpdate(remindersPage);
    remindersPage.buttonCreateReminderGoBack.click();
    cy.contains('Step 1 / 2');
    remindersPage.buttonCreateReminderEventType.click();
    remindersPage.buttonCreateReminderSubmit.click();
    cy.contains('Successfully updated reminder!');
    remindersPage.listReminders.children().should('have.length', 5);
    remindersPage.reminderTile(0).contains('event');
  });

  it('updates all reminder fields', () => {
    initReminderUpdate(remindersPage);
    fillReminderForm({ remindersPage });
    cy.contains('Successfully updated reminder!');
    remindersPage.listReminders.children().should('have.length', 5);
    remindersPage.reminderTile(0).contains('test title');
    remindersPage.reminderTile(0).contains('test description');
    remindersPage.reminderTile(0).contains('1st May');
    remindersPage.reminderTile(0).contains('10:30');
    remindersPage.reminderTile(0).contains('daily');
  });

  it('updates a reminder and creates a new one', () => {
    initReminderUpdate(remindersPage);
    remindersPage.inputTitle.clear();
    remindersPage.inputTitle.type('foo');
    remindersPage.checkboxCreateNewReminder.click();
    remindersPage.buttonCreateReminderSubmit.click();
    remindersPage.listReminders.children().should('have.length', 5);
    cy.contains('Step 1 / 2');
    remindersPage.buttonCreateReminderPaymentType.click();
    fillReminderForm({ remindersPage });
    remindersPage.listReminders.children().should('have.length', 6);
  });

  it('cancels a reminder update and creates a new one', () => {
    initReminderUpdate(remindersPage);
    remindersPage.buttonCreateReminderCancel.click();
    remindersPage.buttonNewReminder.click();
    cy.contains('Step 1 / 2');
    remindersPage.buttonCreateReminderPaymentType.click();
    fillReminderForm({ remindersPage });
    testReminder();
  });
});
