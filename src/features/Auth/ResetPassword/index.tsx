import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import PATHS from 'constants/paths';
import { Button, Column, FormField, Input, Link, Row } from 'components';

import AuthContainer from '../Container';
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

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    dispatch<any>(resetPasswordRequest({ token, data })).then(({ error }: any) => {
      if (error) {
        console.log(error);
        return;
      }
      history.push(PATHS.RESET_PASSWORD_COMPLETE);
    });
  };

  return (
    <AuthContainer>
      <Row>
        <Column>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Column>
                <FormField
                  component={Input}
                  name="newPassword"
                  errors={errors}
                  formRef={register({ required: true })}
                  required
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <FormField
                  component={Input}
                  name="confirmNewPassword"
                  errors={errors}
                  formRef={register({ required: true })}
                  required
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Button block>Reset Password</Button>
              </Column>
            </Row>
          </form>
        </Column>
      </Row>
      <Row>
        <Column>
          <Button as={Link} to={PATHS.SIGN_IN}>
            Go Back
          </Button>
        </Column>
      </Row>
    </AuthContainer>
  );
};

export default ResetPassword;
