import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './Hello';
import Counter from './counter/Container';
import store from './store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Hello content="hello world" />
    <Counter />
  </Provider>,
  document.getElementById('app')
);
