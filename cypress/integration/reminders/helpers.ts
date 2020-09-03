import { RemindersPage } from '../../pages';

export const initReminderCreation = (remindersPage: RemindersPage) => {
  remindersPage.buttonNewReminder.click();
  cy.contains('Create New Reminder');
  cy.contains('Step 1 / 2');
};

export const initReminderUpdate = (remindersPage: RemindersPage) => {
  remindersPage.buttonUpdateReminder(0).click();
  cy.contains('Step 2 / 2');
};

export const testReminder = (occurrence: string = 'daily') => {
  cy.contains('test title');
  cy.contains('test description');
  cy.contains('1st May');
  cy.contains('10:30');
  cy.contains(occurrence);
};

export const fillReminderForm = ({
  remindersPage,
  occurrenceId = 0,
  withDescription = true,
  createAnotherReminder = false,
}: {
  remindersPage: RemindersPage;
  expectedReminders?: number;
  occurrenceId?: number;
  withDescription?: boolean;
  createAnotherReminder?: boolean;
}) => {
  cy.contains('Step 2 / 2');
  remindersPage.inputTitle.clear();
  remindersPage.inputTitle.type('test title');
  withDescription && remindersPage.inputDescription.clear();
  withDescription && remindersPage.inputDescription.type('test description');
  remindersPage.inputRemindAt.clear();
  remindersPage.inputRemindAt.type('2020-05-01');
  remindersPage.inputRemindOn.clear();
  remindersPage.inputRemindOn.type('10:30');
  remindersPage.inputOccurrence.click();
  remindersPage.selectOccurrence(occurrenceId);
  createAnotherReminder && remindersPage.checkboxCreateNewReminder.click();
  remindersPage.buttonCreateReminderSubmit.click();
};
