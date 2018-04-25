import React from 'react';
import { render } from 'react-dom'
import App from './containers/App';
import Store from './store/configureStore'
import { Provider } from 'react-redux'

const store = Store()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

