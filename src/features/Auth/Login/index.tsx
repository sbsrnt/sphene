import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import PATHS from 'constants/paths';
import { Button, Column, FormField, Header, Input, Link, Row, Sublabel } from 'components';

import { fetchUserRequest } from '../actions';

type FormData = {
  email: string;
  password: string;
};

const LoginColumn = styled((props) => <Column {...props} />)`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  max-width: 400px;
`;

const Footer = styled.div`
  display: flex;
`;

const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch(fetchUserRequest(data));
  };

  return (
    <div>
      <Header>Login</Header>
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
              name="password"
              type="password"
              errors={errors}
              formRef={register({ required: true })}
              required
            />
          </Column>
        </Row>
        <Row>
          <LoginColumn>
            <Button>Login</Button>
            <Button variant="none" as={Link} to={PATHS.FORGOT_PASSWORD}>
              <Sublabel>Forgot password?</Sublabel>
            </Button>
          </LoginColumn>
        </Row>
      </Form>
      <Footer>
        <Sublabel>Don't have an account?</Sublabel>
        <Button>Create</Button>
      </Footer>
    </div>
  );
};

export default Login;
