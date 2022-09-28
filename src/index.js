/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
