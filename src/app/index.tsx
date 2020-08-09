import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useAuth, useDocumentTitle } from 'hooks';
import { PageLoader } from 'components';

import GuestView from './GuestView';
import UserView from './UserView';

function App() {
  useDocumentTitle('Sphene');
  const { loading = false, isAuthenticated } = useAuth();
  return (
    <>
      {!loading && (
        <Router>
          {!isAuthenticated && <GuestView />}
          {isAuthenticated && <UserView />}
        </Router>
      )}
      <PageLoader visible={loading} />
    </>
  );
}

export default App;
