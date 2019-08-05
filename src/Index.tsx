import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Routes } from './Routes';
import { HashRouter } from 'react-router-dom';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <HashRouter history={history}>
      <Routes />
    </HashRouter>
  </Provider>,
  document.getElementById('app')
);
