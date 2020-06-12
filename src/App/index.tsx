import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { useAuth, useDocumentTitle } from 'hooks';
import { NavSidebar, NavTopbar, PageLoader } from 'components';
import { Invoicing } from 'features';

const Container = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
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
            <NavTopbar />
            <NavSidebar />
            <Switch>
              <Route exact path="/">
                foo
              </Route>
              <Route exact path="/invoicing" component={Invoicing} />
            </Switch>
          </Container>
        </Router>
      )}
      <PageLoader visible={loading} />
    </>
  );
}

export default App;
