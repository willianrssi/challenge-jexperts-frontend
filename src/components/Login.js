import React from 'react'
import { connect } from 'react-redux'
import { changeField } from '../redux-flow/reducers/login/action-creators'
// import styled from 'styled-components'

const Login = ({ login, senha, changeField }) => (
  <form>
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

const mapStateToProps = (state) => ({
  ...state.login
})

const mapDispatchToProps = (dispatch) => ({
  changeField: (field, value) => dispatch(changeField(field, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
