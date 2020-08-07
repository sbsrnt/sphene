import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth, useDocumentTitle } from 'hooks';
import { ThemeProvider } from 'context-providers';
import { NavSidebar, PageLoader, UserRoute } from 'components';
import { Invoicing, Login, Reminders } from 'features';

import Logout from './Logout';

const AuthContainer = styled.div`
  background: ${(props) => props.theme.bg.primary};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px calc(100vw - 200px);
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
              <Logout />
              <ThemeProvider>
                <AuthContainer>
                  <Route exact path="/" component={Login} />
                  <Route exact path="/register" component={Login} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/forgot-password" component={Login} />
                  <Route exact path="/verify/:token" component={Login} />
                  <Route exact path="/reset-password/:token" component={Login} />
                </AuthContainer>
              </ThemeProvider>
            </>
          )}
          {isAuthenticated && (
            <Container>
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
