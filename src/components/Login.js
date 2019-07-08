import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeField } from '../redux-flow/reducers/login/action-creators'
import { login } from '../redux-flow/reducers/auth/action-creators'
// import styled from 'styled-components'

class Login extends Component {
  handleLogin (e, valores) {
    e.preventDefault()
    this.props.efetuarLogin(valores)
  }

  render () {
    const { login, senha, changeField } = this.props
    return (
      <form onSubmit={(e) => this.handleLogin(e, { login, senha })} >
        <div className='form-group'>
          <label htmlFor='login-usuario'>
            Login
          </label>
          <input id='login-usuario' className='form-control' type='text' placeholder='Login' value={login} onChange={(e) => changeField('login', e.target.value)} />
        </div>
        <div className='form-group'>
          <label htmlFor='login-senha'>
            Senha
          </label>
          <input id='login-senha' className='form-control' type='password' placeholder='Senha' value={senha} onChange={(e) => changeField('senha', e.target.value)} />
        </div>
        <button type='submit' className='btn btn-primary'>Login</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.login
})

const mapDispatchToProps = (dispatch) => ({
  changeField: (field, value) => dispatch(changeField(field, value)),
  efetuarLogin: (valores) => dispatch(login(valores))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
