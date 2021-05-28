import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import store from 'store';
import App from './containers/App';
import {Provider} from 'react-redux';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
