import React, { Component } from 'react'
import EditForm from '../components/EditForm'
import Alert from '../components/Alert'
import { connect } from 'react-redux'
import { changeField, update, closeSuccessMgs, closeErrorMgs, toggleChangePassword, clearValidateErrors, resetMsgAndErrors } from '../redux-flow/reducers/edit/action-creators'

import logo from '../assets/logo-jexperts.jpg'
import './pageCadastro.css'

class PageEditar extends Component {
  constructor (props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
  }

  componentDidMount () {
    // Evitar que rota seja acessada caso não tenha usuário na state do edit
    if (!this.props.user._id) {
      // caso não tenha usuário selecionado redireciona para a home
      this.props.history.push('/')
    }

    this.props.resetMsgAndErrors()
  }

  submitForm (e) {
    const { senha, nome, telefone, email, login, _id } = this.props.user
    e.preventDefault()
    if (this.props.changePassword) {
      this.props.update(_id, { nome, telefone, email, login, senha }, true)
    } else {
      this.props.update(_id, { nome, telefone, email, login }, false)
    }
  }

  render () {
    const { changeField, user, validateErrors, updateSuccess, updateError, closeSuccessMgs, closeErrorMgs, changePassword, toggleChangePassword } = this.props
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
              <Alert handleDismiss={closeSuccessMgs} show={updateSuccess.show} title='Usuário Atualizado' variant='success'>
                {updateSuccess.message}
              </Alert>
              <Alert handleDismiss={closeErrorMgs} show={updateError.show} title='Usuário não Atualizado' variant='danger'>
                {updateError.message}
              </Alert>
            </div>
            <EditForm toggleChangePassword={toggleChangePassword} changePassword={changePassword} validateErrors={validateErrors.fields} fields={user} changeField={changeField} submitForm={this.submitForm} />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (field, value) => dispatch(changeField(field, value)),
  update: (id, value, withPass) => dispatch(update(id, value, withPass)),
  closeSuccessMgs: () => dispatch(closeSuccessMgs()),
  closeErrorMgs: () => dispatch(closeErrorMgs()),
  toggleChangePassword: () => dispatch(toggleChangePassword()),
  clearValidateErrors: () => dispatch(clearValidateErrors()),
  resetMsgAndErrors: () => dispatch(resetMsgAndErrors())
})

const mapStateToProps = (state) => ({
  ...state.edit
})

export default connect(mapStateToProps, mapDispatchToProps)(PageEditar)
