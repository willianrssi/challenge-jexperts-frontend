import React, { Component } from 'react'
import SignUpForm from '../components/SignUpForm'
import Alert from '../components/Alert'
import { connect } from 'react-redux'
import { changeField, signup, resetToInitialState, closeSuccessMgs, closeErrorMgs } from '../redux-flow/reducers/cadastro/action-creators'

import logo from '../assets/logo-jexperts.jpg'
import './pageCadastro.css'

class PageCadastro extends Component {
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount () {
    // Apaga todas as mensagens de erro ou sucesso ao renderizar
    this.props.resetToInitialState()
  }

  submitForm (e) {
    const { nome, telefone, email, login, senha } = this.props.fields
    e.preventDefault()
    this.props.signup({ nome, telefone, email, login, senha })
  }

  render () {
    const { fields, changeField, signupSuccess, validateErrors, closeSuccessMgs, signupError, closeErrorMgs } = this.props
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4 col-sm-3 col-md-2  container-logo-cadastro'>
            <img src={logo} alt='Logo da JExperts' />
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-12 col-sm-8 col-md-6 col-lg-4 pb-3'>
            <div className='mb-2'>
              <Alert handleDismiss={closeSuccessMgs} show={signupSuccess.show} title='Usuário Cadastrado' variant='success'>
                {signupSuccess.message}
              </Alert>
              <Alert handleDismiss={closeErrorMgs} show={signupError.show} title='Erro ao cadastrar' variant='danger'>
                {signupError.errors.map((erro) =>
                  <span className='d-block'>- {erro}</span>
                )}
              </Alert>
            </div>
            <SignUpForm fields={fields} submitForm={this.submitForm} changeField={changeField} validateErrors={validateErrors.fields} />

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state.cadastro
})

const mapDispatchToProps = (dispatch) => ({
  changeField: (field, value) => dispatch(changeField(field, value)),
  signup: (valores) => dispatch(signup(valores)),
  resetToInitialState: () => dispatch(resetToInitialState()),
  closeSuccessMgs: () => dispatch(closeSuccessMgs()),
  closeErrorMgs: () => dispatch(closeErrorMgs())
})

export default connect(mapStateToProps, mapDispatchToProps)(PageCadastro)
