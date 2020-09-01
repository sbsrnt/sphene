import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import PATHS from 'constants/paths';
import { Button, Column, FormField, Input, Link, Row } from 'components';

import AuthContainer from '../Container';
import { getResetPasswordSelector } from '../selectors';
import { resetPasswordRequest } from './actions';

type FormData = {
  newPassword: string;
  confirmNewPassword: string;
};

const ResetPassword = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const { token } = useParams();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getResetPasswordSelector);

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch<any>(resetPasswordRequest({ token, data })).then(({ error }: any) => {
      if (error) return toast.error(error.data.message);

      toast.success('Password has been successfully reset!');
      history.push(PATHS.SIGN_IN);
    });
  };

  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column>
            <FormField
              component={Input}
              name="newPassword"
              dataId="new-password"
              type="password"
              errors={errors}
              formRef={register}
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <FormField
              component={Input}
              name="confirmNewPassword"
              type="password"
              dataId="confirm-new-password"
              errors={errors}
              formRef={register}
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button block dataId="button-reset-password" isLoading={isLoading}>
              Reset Password
            </Button>
          </Column>
        </Row>
      </form>
      <Button as={Link} to={PATHS.SIGN_IN} dataId="button-go-back" disabled={isLoading}>
        Go Back
      </Button>
    </AuthContainer>
  );
};

export default ResetPassword;
