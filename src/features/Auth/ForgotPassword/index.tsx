import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import PATHS from 'constants/paths';
import { Button, Column, FormField, Input, Link, Row } from 'components';

import AuthContainer from '../Container';
import { forgotPasswordRequest } from './actions';

type FormData = {
  email: string;
};

const ForgotPassword = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch<any>(forgotPasswordRequest(data)).then(({ error }: any) => {
      if (error) {
        console.log(error);
        return;
      }
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
              formRef={register({ required: true })}
              dataId="email"
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button block dataId="button-request-reset">
              Request Password Reset
            </Button>
          </Column>
        </Row>
      </form>
      <Button as={Link} to={PATHS.SIGN_IN} dataId="button-go-back">
        Go Back
      </Button>
    </AuthContainer>
  );
};

export default ForgotPassword;
