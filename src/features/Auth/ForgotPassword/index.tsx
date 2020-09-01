import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import PATHS from 'constants/paths';
import { Button, Column, FormField, Input, Link, Row } from 'components';

import AuthContainer from '../Container';
import { getForgotPasswordSelector } from '../selectors';
import { forgotPasswordRequest } from './actions';

type FormData = {
  email: string;
};

const ForgotPassword = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getForgotPasswordSelector);

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch<any>(forgotPasswordRequest(data)).then(({ error }: any) => {
      if (error) return toast.error(error.data.message);

      toast.success('Reset password request has been sent. Check your email.');
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
              name="email"
              errors={errors}
              formRef={register}
              dataId="email"
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button block dataId="button-request-reset" isLoading={isLoading}>
              Request Password Reset
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

export default ForgotPassword;
