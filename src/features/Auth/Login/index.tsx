import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { Button, FormField, Input } from 'components';

import { fetchUserRequest } from '../actions';

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const { handleSubmit, register, errors, getValues } = useForm();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch(fetchUserRequest(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        component={Input}
        name="email"
        errors={errors}
        placeholder="jon@smith.com"
        formRef={register({ required: true })}
        values={getValues()}
        required
      />

      <FormField
        component={Input}
        name="password"
        errors={errors}
        formRef={register({ required: true })}
        values={getValues()}
        required
      />

      <Button>Submit</Button>
    </form>
  );
};

export default Login;
