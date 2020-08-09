import React from 'react';

import PATHS from 'constants/paths';
import { Body, Button, Header, Link, Row } from 'components';

import AuthContainer from '../Container';

const SignUpComplete = () => (
  <AuthContainer>
    <div>
      <Row>
        <Header>Sign Up complete</Header>
      </Row>
      <Row>
        <Body>Confirmation link has been sent yada yada</Body>
      </Row>
      <Row>
        <Button block as={Link} to={PATHS.SIGN_IN}>
          Sign In
        </Button>
      </Row>
    </div>
  </AuthContainer>
);

export default SignUpComplete;
