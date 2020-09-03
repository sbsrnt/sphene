import { Page } from './page';

class RemindersPage extends Page {
  public constructor(param?: string) {
    super(`/reminders${param || ''}`);
  }

  public get listReminders() {
    return cy.getId('list-reminders');
  }

  public reminderTile(index: number) {
    return cy.getId(`reminder-${index}`);
  }

  /**
   * Create / Update Reminder
   */
  public get buttonNewReminder() {
    return cy.getId('button-createNewReminder');
  }

  public get modalCreateNewReminder() {
    return cy.getId('modal-createNewReminder');
  }

  public buttonUpdateReminder(index: number) {
    return cy.getId(`button-updateReminder-${index}`);
  }

  public buttonDeleteReminder(index: number) {
    return cy.getId(`button-deleteReminder-${index}`);
  }

  // First step
  public get buttonCreateReminderPaymentType() {
    return cy.getId('button-payment');
  }

  public get buttonCreateReminderBirthdayType() {
    return cy.getId('button-birthday');
  }

  public get buttonCreateReminderEventType() {
    return cy.getId('button-event');
  }

  // Second Step
  public get inputTitle() {
    return cy.getId('input-title');
  }

  public get inputDescription() {
    return cy.getId('input-description');
  }

  public get inputRemindAt() {
    return cy.getId('input-remindAt');
  }

  public get inputRemindOn() {
    return cy.getId('input-remindOn');
  }

  public get inputOccurrence() {
    return cy.getSelect('occurrence');
  }

  public selectOccurrence(optionIndex: number) {
    return cy.getSelectValue('occurrence', optionIndex);
  }

  public get checkboxCreateNewReminder() {
    return cy.getId('checkbox-createNewReminder');
  }

  // Common
  public get buttonCreateReminderCancel() {
    return cy.getId('button-cancel');
  }

  public get buttonCreateReminderGoBack() {
    return cy.getId('button-go-back');
  }

  public get buttonCreateReminderSubmit() {
    return cy.getId('button-submit');
  }
}

export default RemindersPage;
