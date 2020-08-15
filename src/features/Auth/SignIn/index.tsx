import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import PATHS from 'constants/paths';
import { Button, Column, FormField, Input, Link, Row, Sublabel } from 'components';

import AuthContainer from '../Container';
import { signInUserRequest } from './actions';

type FormData = {
  email: string;
  password: string;
};

const SignInColumn = styled((props) => <Column {...props} />)`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 20px;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SignIn = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch(signInUserRequest(data));
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
              placeholder="jon@smith.com"
              formRef={register({ required: true })}
              dataId="email"
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <FormField
              component={Input}
              name="password"
              type="password"
              errors={errors}
              formRef={register({ required: true })}
              dataId="password"
              required
            />
          </Column>
        </Row>
        <Row>
          <SignInColumn>
            <Button dataId="button-sign-in">Sign In</Button>
            <Button
              variant="none"
              as={Link}
              to={PATHS.FORGOT_PASSWORD}
              dataId="button-forgot-password"
            >
              <Sublabel>Forgot password?</Sublabel>
            </Button>
          </SignInColumn>
        </Row>
      </form>
      <Footer>
        <Sublabel>Don't have an account?</Sublabel>
        <Button as={Link} to={PATHS.SIGN_UP} dataId="button-sign-up">
          Sign Up
        </Button>
      </Footer>
    </AuthContainer>
  );
};

export default SignIn;
