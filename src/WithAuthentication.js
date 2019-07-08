import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import App from './App'
import PageLogin from './pages/PageLogin'
import { validaToken } from './redux-flow/reducers/auth/action-creators'

class WithAuthentication extends Component {
  componentDidMount () {
    if (this.props.auth.user) {
      this.props.validaToken(this.props.auth.user.token)
    }
  }
  render () {
    const { user, validToken } = this.props.auth
    if (user && validToken) {
      axios.defaults.headers.common['authorization'] = user.token
      return <App>{this.props.children}</App>
    } else if (!user && !validToken) {
      return <PageLogin />
    } else {
      return false
    }
  }
}

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = dispatch => ({ 
  validaToken: (token) => dispatch(validaToken(token)) })

export default connect(mapStateToProps, mapDispatchToProps)(WithAuthentication)
