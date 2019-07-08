import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import WithAutehntication from './WithAuthentication'
import configureStore from './redux-flow/configure-store/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <WithAutehntication />
  </Provider>,
  document.getElementById('root'))
