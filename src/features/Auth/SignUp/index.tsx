import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import PATHS from 'constants/paths';
import { Button, Column, FormField, Input, Link, Row, Sublabel } from 'components';

import AuthContainer from '../Container';
import { getRegistrationSelector } from '../selectors';
import { signUpUserRequest } from './actions';

type FormData = {
  email: string;
  confirmEmail: string;
  password: string;
};

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SignUp = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getRegistrationSelector);

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch<any>(signUpUserRequest(data)).then(({ error }: any) => {
      if (error) return toast.error(error.data.message);

      toast.success('Confirmation e-mail has been sent. Check your e-mail.');
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
              placeholder="jon@smith.com"
              formRef={register}
              dataId="email"
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <FormField
              component={Input}
              name="confirmEmail"
              errors={errors}
              placeholder="jon@smith.com"
              formRef={register}
              dataId="confirm-email"
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
              formRef={register}
              dataId="password"
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button block dataId="button-sign-up" isLoading={isLoading}>
              Sign Up
            </Button>
          </Column>
        </Row>
      </form>
      <Footer>
        <Sublabel>Already have an account?</Sublabel>
        <Button as={Link} to={PATHS.SIGN_IN} dataId="button-sign-in" disabled={isLoading}>
          Sign In
        </Button>
      </Footer>
    </AuthContainer>
  );
};

export default SignUp;
