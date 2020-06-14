import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth, useDocumentTitle } from 'hooks';
import { NavSidebar, PageLoader } from 'components';
import { Invoicing, Reminders } from 'features';

const Container = styled.div`
  display: grid;
  grid-template-columns: 200px calc(100vw - 200px);
`;

function App() {
  useDocumentTitle('Sphene');
  const { loading = true } = useAuth();

  return (
    <>
      {!loading && (
        <Router>
          <Container>
            <NavSidebar />
            <Switch>
              <Route exact path="/">
                foo
              </Route>
              <Route exact path="/invoicing" component={Invoicing} />
              <Route exact path="/reminders" component={Reminders} />
            </Switch>
          </Container>
        </Router>
      )}
      <PageLoader visible={loading} />
    </>
  );
}

export default App;
