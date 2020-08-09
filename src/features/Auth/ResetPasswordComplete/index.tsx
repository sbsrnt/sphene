import React from 'react';

import PATHS from 'constants/paths';
import { Button, Column, Header, Link, Row } from 'components';

import AuthContainer from '../Container';

const ResetPasswordComplete = () => (
  <AuthContainer>
    <div>
      <Row>
        <Column>
          <Header>Reset Password complete</Header>
        </Column>
      </Row>
      <Row>
        <Column>
          <Button block as={Link} to={PATHS.SIGN_IN}>
            Sign In
          </Button>
        </Column>
      </Row>
    </div>
  </AuthContainer>
);

export default ResetPasswordComplete;
