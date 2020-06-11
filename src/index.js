import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { AuthProvider } from './AuthProvider';
import * as serviceWorker from './serviceWorker';
import history from './utils/history';

import './index.css';

const config = {
  domain: 'dev-tm63t6rj.eu.auth0.com',
  clientId: 'yhhaRAt9eutJivCcyXuYhmV1pH394Q42',
};

const onRedirectCallback = (appState) => {
  history.push(appState && appState.targetUrl ? appState.targetUrl : window.location.pathname);
};

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
