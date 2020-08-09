import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import PATHS from 'constants/paths';
import { Button, Column, FormField, Input, Link, Row, Sublabel } from 'components';

import AuthContainer from '../Container';
import { signUpUserRequest } from './actions';

type FormData = {
  email: string;
  confirmEmail: string;
  password: string;
};

const Form = styled.form`
  max-width: 400px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SignUp = () => {
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch<any>(signUpUserRequest(data)).then(() => history.push(PATHS.SIGN_UP_COMPLETE));
  };

  return (
    <AuthContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Column>
            <FormField
              component={Input}
              name="email"
              errors={errors}
              placeholder="jon@smith.com"
              formRef={register({ required: true })}
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
              formRef={register({ required: true })}
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
              required
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button block>Sign Up</Button>
          </Column>
        </Row>
      </Form>
      <Footer>
        <Sublabel>Already have an account?</Sublabel>
        <Button as={Link} to={PATHS.SIGN_IN}>
          Login
        </Button>
      </Footer>
    </AuthContainer>
  );
};

export default SignUp;
