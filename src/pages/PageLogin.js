import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { changeField } from '../redux-flow/reducers/login/action-creators'
import { login, clearErrorsForm } from '../redux-flow/reducers/auth/action-creators'

import './pageLogin.css'
import logo from '../assets/logo-jexperts.jpg'

import LoginForm from '../components/LoginForm'
import Alert from '../components/Alert'

class PageLogin extends Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin (e) {
    e.preventDefault()
    console.log(this.props.login)
    this.props.efetuarLogin({
      login: this.props.login,
      senha: this.props.senha
    })
  }

  render () {
    const { errorLogin, clearErrorsForm } = this.props
    return (
      <Fragment>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-6 col-sm-4 col-md-3 container-logo-login'>
              <img src={logo} alt='Logo da JExperts' />
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-12 col-sm-8 col-md-6 col-lg-4'>
              <LoginForm
                senha={this.props.senha}
                login={this.props.login}
                handleLogin={this.handleLogin}
                changeField={this.props.changeField}
              />
              <div className='mt-3' >
                <Alert
                  title=''
                  variant='danger'
                  show={!!errorLogin}
                  handleDismiss={clearErrorsForm}
                >
                  {errorLogin &&
                    errorLogin.map((erro, index) => (
                      <React.Fragment key={index} >
                        <span>{erro}</span>
                        <br />
                      </React.Fragment>
                    ))}
                </Alert>

              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.login,
  errorLogin: state.auth.errorLogin
})

const mapDispatchToProps = (dispatch) => ({
  changeField: (field, value) => dispatch(changeField(field, value)),
  efetuarLogin: (valores) => dispatch(login(valores)),
  clearErrorsForm: () => dispatch(clearErrorsForm('Login'))
})

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin)
