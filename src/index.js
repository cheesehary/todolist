import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { creatStore } from 'redux';

import store from './store';
import routes from './routes';

require('./views/index.scss');

ReactDom.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)