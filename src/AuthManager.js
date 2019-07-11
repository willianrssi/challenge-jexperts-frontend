import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import ClosedRoutes from './ClosedRoutes'
import OpenRoutes from './OpenRoutes'
import { validaToken } from './redux-flow/reducers/auth/action-creators'

class AuthManager extends Component {
  componentDidMount () {
    // Tenta validar o token presente no local storage
    if (this.props.auth.user) {
      this.props.validaToken(this.props.auth.user.token)
    }
  }
  render () {
    // Irá verificar se possui um usuário autenticado
    const { user, validToken } = this.props.auth
    if (user && validToken) {
      axios.defaults.headers.common['authorization'] = user.token
      // se sim retorna as rotas fechadas da aplicação
      return <ClosedRoutes />
    } else if (!user && !validToken) {
      // senão retorna as rotas abertas da aplicação
      return <OpenRoutes />
    } else {
      return false
    }
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapDispatchToProps = dispatch => ({
  validaToken: (token) => dispatch(validaToken(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(AuthManager)
