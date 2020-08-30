import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import { applyMiddleware, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AuthProvider } from 'context-providers';

import App from './app';
import rootReducer from './app/rootReducer';
import * as serviceWorker from './serviceWorker';

import './index.css';

const client = axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

const axiosMiddlewareConfig = {
  interceptors: {
    request: [
      (_, req) => {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
        return req;
      },
    ],
    response: [
      {
        success: (_, res) => Promise.resolve(res.data),
      },
      {
        error: (_, error) => Promise.reject({ message: error.response.data }),
      },
    ],
  },
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(axiosMiddleware(client, axiosMiddlewareConfig)))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
