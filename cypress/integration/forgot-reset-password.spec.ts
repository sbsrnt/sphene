import PATHS from '../../src/constants/paths';
import { ForgotPasswordPage, ResetPasswordPage, SignInPage } from '../pages';

let resetPasswordToken = '';

describe('ForgotPassword', () => {
  const signInPage = new SignInPage();
  const forgotPasswordPage = new ForgotPasswordPage();

  before(() => {
    cy.cleanupAndSeedData();
  });

  beforeEach(() => {
    signInPage.visit();
    signInPage.buttonForgotPassword.click();
  });

  it('is on Forgot Password page', () => {
    cy.isUrl(PATHS.FORGOT_PASSWORD);
    forgotPasswordPage.buttonRequestReset.should('be.visible');
  });

  it("throws 404 if not existing user want's to create Forgot Password token", () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: `/auth${PATHS.FORGOT_PASSWORD}` }).as('user');

    forgotPasswordPage.visit();
    forgotPasswordPage.inputEmail.type('not@existing.user');
    forgotPasswordPage.buttonRequestReset.click();

    cy.wait('@user').should((res) => {
      expect(res.status).to.eq(404);
    });
    cy.toastMsg("User with given email doesn't exist.");
    cy.isUrl(PATHS.FORGOT_PASSWORD);
  });

  it('creates Forgot Password token', () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: `/auth${PATHS.FORGOT_PASSWORD}` }).as('user');

    forgotPasswordPage.inputEmail.type('test@test.test');
    forgotPasswordPage.buttonRequestReset.click();

    forgotPasswordPage.buttonRequestReset.should('be.disabled');
    forgotPasswordPage.buttonGoBack.should('have.attr', 'aria-disabled', 'true');

    cy.wait('@user').should((res: any) => {
      // Probably could use the cy.request().as(<alias>) but the proposed solutions is ugly af.
      // See https://github.com/cypress-io/cypress/issues/3827#issuecomment-502528398
      // There is also this: https://stackoverflow.com/a/53708850 but it's so long I CBA implementing it for one test
      const { token } = res.response.body;
      resetPasswordToken = token;
      expect(res.status).to.eq(201);
    });
    cy.toastMsg('Reset password request has been sent. Check your email.');
    cy.isUrl(PATHS.SIGN_IN);
  });

  it('throws 422 if e-mail has recently sent Forgot Password token', () => {
    cy.server();
    cy.mockRoute({ method: 'POST', path: `/auth${PATHS.FORGOT_PASSWORD}` }).as('user');

    forgotPasswordPage.visit();
    forgotPasswordPage.inputEmail.type('test@test.test');
    forgotPasswordPage.buttonRequestReset.click();

    cy.wait('@user').should((res) => {
      expect(res.status).to.eq(422);
    });

    forgotPasswordPage.buttonRequestReset.should('not.be.disabled');
    forgotPasswordPage.buttonGoBack.should('not.have.attr', 'aria-disabled', 'true');

    cy.toastMsg('E-mail has been sent recently.');
    cy.isUrl(PATHS.FORGOT_PASSWORD);
  });
});

describe('ResetPassword', () => {
  const resetPasswordPage = new ResetPasswordPage();
  const signInPage = new SignInPage();

  it('redirects to Home when in /reset-password', () => {
    resetPasswordPage.visit();
    cy.isUrl(PATHS.RESET_PASSWORD);
    cy.isUrl(PATHS.HOME);
  });

  // To make this test work we need to create reset password token in 'creates Forgot Password token'
  // I could create command for that, but since we use that token only in one test then I don't see the need for it
  it('resets password with existing token in DB', () => {
    const resetPasswordTokenPage = new ResetPasswordPage(`/${resetPasswordToken}`);
    cy.server();
    cy.mockRoute({
      method: 'POST',
      path: `/auth${PATHS.RESET_PASSWORD}/${resetPasswordToken}`,
    }).as('user');

    resetPasswordTokenPage.visit();
    resetPasswordTokenPage.inputNewPassword.type('newpassword');
    resetPasswordTokenPage.inputConfirmNewPassword.type('newpassword');
    resetPasswordTokenPage.buttonResetPassword.click();

    resetPasswordTokenPage.buttonResetPassword.should('be.disabled');
    resetPasswordTokenPage.buttonGoBack.should('have.attr', 'aria-disabled', 'true');

    cy.wait('@user').should((res: any) => {
      expect(res.status).to.eq(201);
    });
    cy.toastMsg('Password has been successfully reset!');
    cy.isUrl(PATHS.SIGN_IN);

    signInPage.inputEmail.type('test@test.test');
    signInPage.inputPassword.type('newpassword');
    signInPage.buttonSignIn.click();

    cy.toastMsg('Successfully signed in!');
    cy.isUrl(PATHS.DASHBOARD);
  });

  it("throws 403 when token doesn't exist", () => {
    const resetPasswordTokenPage = new ResetPasswordPage(`/42`);
    cy.server();
    cy.mockRoute({ method: 'POST', path: `/auth${PATHS.RESET_PASSWORD}/42` }).as('user');

    resetPasswordTokenPage.visit();
    resetPasswordTokenPage.inputNewPassword.type('newpassword');
    resetPasswordTokenPage.inputConfirmNewPassword.type('newpassword');
    resetPasswordTokenPage.buttonResetPassword.click();

    cy.wait('@user').should((res: any) => {
      expect(res.status).to.eq(403);
    });

    resetPasswordTokenPage.buttonResetPassword.should('not.be.disabled');
    resetPasswordTokenPage.buttonGoBack.should('not.have.attr', 'aria-disabled', 'true');

    cy.toastMsg('Token invalid.');
    cy.isUrl(`${PATHS.RESET_PASSWORD}/42`);
  });
});
