import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import PATHS from 'constants/paths';
import { useAuth, useDocumentTitle } from 'hooks';
import { ThemeProvider } from 'context-providers';
import { Column, NavSidebar, PageLoader, Row, UserRoute } from 'components';
import { Invoicing, Login, Reminders } from 'features';

import Logout from './Logout';

const AuthContainer = styled(Row)`
  background: ${(props) => props.theme.bg.primary};
  width: 100%;
  height: 100%;
  margin: 0;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px calc(100vw - 200px);
`;

const GuestContainerLeftColumn = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const GuestContainerRightColumn = styled(Column)`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
`;

const Features = styled.div`
  height: 600px;
  width: 400px;
  margin-right: -0.5em;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  border-right: 0;
  box-shadow: 0 1px 5px ${(props) => props.theme.colors.primary};
`;

const Wrapper = styled.div`
  padding: 5em;
  height: 600px;
  width: 400px;
  margin-left: -0.5em;
  border: 2px solid ${(props) => props.theme.bg.primary};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  border-left: 0;
  justify-content: flex-start;
  box-shadow: 0 1px 5px ${(props) => props.theme.bg.primary};
`;

function App() {
  useDocumentTitle('Sphene');
  const { loading = false, isAuthenticated } = useAuth();
  return (
    <>
      {!loading && (
        <Router>
          {!isAuthenticated && (
            <>
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
            </>
          )}
          {isAuthenticated && (
            <Container>
              <Logout />
              <NavSidebar />
              <Switch>
                <UserRoute exact path="/" component={Invoicing} />
                <UserRoute exact path="/invoicing" component={Invoicing} />
                <UserRoute exact path="/reminders" component={Reminders} />
              </Switch>
            </Container>
          )}
        </Router>
      )}
      <PageLoader visible={loading} />
    </>
  );
}

export default App;
