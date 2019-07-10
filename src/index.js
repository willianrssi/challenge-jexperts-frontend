import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import AuthManager from './AuthManager'
import configureStore from './redux-flow/configure-store/store'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <AuthManager />
  </Provider>,
  document.getElementById('root'))
