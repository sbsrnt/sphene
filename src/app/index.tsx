import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { useAuth } from 'hooks';
import { PageLoader } from 'components';

import GuestView from './GuestView';
import UserView from './UserView';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { isLoading = true, isAuthenticated } = useAuth();

  return (
    <>
      {!isLoading && (
        <Router>
          {!isAuthenticated && <GuestView />}
          <UserView />
        </Router>
      )}
      <PageLoader visible={isLoading} />
      <ToastContainer />
    </>
  );
}

export default App;
