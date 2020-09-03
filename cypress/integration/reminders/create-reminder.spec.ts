import PATHS from '../../../src/constants/paths';
import { RemindersPage } from '../../pages';
import { cleanupAndSeedData, isUrl, signIn, signOut } from '../../support';
import { fillReminderForm, initReminderCreation, testReminder } from './helpers';

describe('Create Reminder', () => {
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

  it('is on Reminders page', () => {
    isUrl(PATHS.REMINDERS);
    remindersPage.buttonNewReminder.should('be.visible');
    remindersPage.listReminders.children().should('have.length', 5);
  });

  it.skip('redirects when signed out', () => {
    isUrl(PATHS.REMINDERS);
    signOut();
    isUrl(PATHS.SIGN_IN);
  });

  it.skip('redirects when invalid token', () => {
    isUrl(PATHS.REMINDERS);
    signOut();
    isUrl(PATHS.SIGN_IN);
    signIn('123');
    remindersPage.visit();
    isUrl(PATHS.SIGN_IN);
  });

  it('inits reminder creation but goes back, cancels, creates new, moves to step 2 and cancels', () => {
    initReminderCreation(remindersPage);
    remindersPage.buttonCreateReminderPaymentType.click();
    cy.contains('Step 2 / 2');
    remindersPage.buttonCreateReminderGoBack.click();
    cy.contains('Step 1 / 2');
    remindersPage.buttonCreateReminderCancel.click();
    initReminderCreation(remindersPage);
    remindersPage.buttonCreateReminderPaymentType.click();
    cy.contains('Step 2 / 2');
    remindersPage.buttonCreateReminderCancel.click();
    initReminderCreation(remindersPage);
    remindersPage.buttonCreateReminderCancel.click();
    remindersPage.listReminders.children().should('have.length', 5);
  });

  it('creates reminder with description', () => {
    initReminderCreation(remindersPage);
    remindersPage.buttonCreateReminderPaymentType.click();
    fillReminderForm({ remindersPage });
    remindersPage.listReminders.children().should('have.length', 6);
    cy.contains('Successfully created reminder!');
    testReminder();
  });

  it('creates reminder without description', () => {
    initReminderCreation(remindersPage);
    remindersPage.buttonCreateReminderPaymentType.click();
    fillReminderForm({ remindersPage, withDescription: false });
    remindersPage.listReminders.children().should('have.length', 7);
  });

  describe('creates event type:', () => {
    it('Payment', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderPaymentType.click();
      cy.contains(`Create New Payment Reminder`);
      fillReminderForm({ remindersPage });
    });

    it('Birthday', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderBirthdayType.click();
      cy.contains(`Create New Birthday Reminder`);
      fillReminderForm({ remindersPage });
    });

    it('Event', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderEventType.click();
      cy.contains(`Create New Event Reminder`);
      fillReminderForm({ remindersPage });
    });
  });

  describe('with occurrence:', () => {
    it('Daily', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderPaymentType.click();
      fillReminderForm({ remindersPage, occurrenceId: 0 });
      testReminder('daily');
    });

    it('Every Other Day', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderPaymentType.click();
      fillReminderForm({ remindersPage, occurrenceId: 1 });
      testReminder('every_other_day');
    });

    it('Weekly', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderEventType.click();
      fillReminderForm({ remindersPage, occurrenceId: 2 });
      testReminder('weekly');
    });

    it('Bi-Weekly', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderEventType.click();
      fillReminderForm({ remindersPage, occurrenceId: 3 });
      testReminder('bi_weekly');
    });

    it('Monthly', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderEventType.click();
      fillReminderForm({ remindersPage, occurrenceId: 4 });
      testReminder('monthly');
    });

    it('Quarterly', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderEventType.click();
      fillReminderForm({ remindersPage, occurrenceId: 5 });
      testReminder('quarterly');
    });

    it('Half-Yearly', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderEventType.click();
      fillReminderForm({ remindersPage, occurrenceId: 6 });
      testReminder('half_yearly');
    });

    it('Yearly', () => {
      initReminderCreation(remindersPage);
      remindersPage.buttonCreateReminderEventType.click();
      fillReminderForm({ remindersPage, occurrenceId: 7 });
      testReminder('yearly');
    });
  });

  it('resets form on "create another reminder" and creates new reminder', () => {
    initReminderCreation(remindersPage);
    remindersPage.buttonCreateReminderEventType.click();
    fillReminderForm({ remindersPage, createAnotherReminder: true });
    remindersPage.inputTitle.should('have.value', '');
    remindersPage.inputDescription.should('have.value', '');
    remindersPage.inputRemindAt.should('have.value', '');
    remindersPage.inputRemindOn.should('have.value', '');

    fillReminderForm({ remindersPage });
  });
});
