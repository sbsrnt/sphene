import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import PATHS from 'constants/paths';
import { ThemeProvider } from 'context-providers';
import { Column, Row } from 'components';
import { Login } from 'features';

const AuthContainer = styled(Row)`
  background: ${(props) => props.theme.colors.gray100};
  width: 100%;
  height: 100%;
  margin: 0;
`;

const GuestContainerLeftColumn = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const GuestContainerRightColumn = styled(Column)`
  background: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
`;

const Features = styled.div`
  height: 500px;
  width: 320px;
  margin-right: -0.5em;
  border: 2px solid ${(props) => props.theme.colors.white};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-right: 0;
  box-shadow: 0 1px 5px ${(props) => props.theme.colors.white};
`;

const Wrapper = styled.div`
  padding: 2em;
  height: 500px;
  width: 320px;
  margin-left: -0.5em;
  border: 2px solid ${(props) => props.theme.colors.gray100};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-left: 0;
  justify-content: flex-start;
  box-shadow: 0 1px 5px ${(props) => props.theme.colors.gray100};
`;

const GuestView = () => (
  <ThemeProvider>
    <AuthContainer>
      <GuestContainerLeftColumn xs={6}>
        <Features>XD</Features>
      </GuestContainerLeftColumn>
      <GuestContainerRightColumn xs={6}>
        <Wrapper>
          <Route exact path={PATHS.HOME} component={Login} />
          <Route exact path={PATHS.REGISTER} component={Login} />
          <Route exact path={PATHS.LOGIN} component={Login} />
          <Route exact path={PATHS.FORGOT_PASSWORD} component={Login} />
          <Route exact path={PATHS.VERIFY_EMAIL} component={Login} />
          <Route exact path={PATHS.RESET_PASSWORD_TOKEN} component={Login} />
        </Wrapper>
      </GuestContainerRightColumn>
    </AuthContainer>
  </ThemeProvider>
);

export default GuestView;
