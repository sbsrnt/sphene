import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useAuth } from 'hooks';
import { PageLoader } from 'components';

import GuestView from './GuestView';
import UserView from './UserView';

function App() {
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
