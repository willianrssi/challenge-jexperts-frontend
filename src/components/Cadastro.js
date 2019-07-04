import React from 'react'
import { changeField } from '../redux-flow/reducers/cadastro/action-creators'
import { connect } from 'react-redux'

const Cadastro = ({ nome, telefone, email, login, senha, changeField }) => (
  <form>
    <div className='form-group'>
      <label htmlFor='cadastro-nome'>
        Nome*
      </label>
      <input id='cadastro-nome' className='form-control' type='text' placeholder='Nome' value={nome} onChange={(e) => changeField('nome', e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-telefone'>
        Telefone
      </label>
      <input id='cadastro-telefone' className='form-control' type='text' placeholder='Telefone' value={telefone} onChange={(e) => changeField('telefone', e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-email'>
        Email
      </label>
      <input id='cadastro-email' className='form-control' type='email' placeholder='Email' value={email} onChange={(e) => changeField('email', e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-login'>
        Login
      </label>
      <input id='cadastro-login' className='form-control' type='text' placeholder='Login' value={login} onChange={(e) => changeField('login', e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='cadastro-senha'>
        Senha
      </label>
      <input id='cadastro-senha' className='form-control' type='password' placeholder='Senha' value={senha} onChange={(e) => changeField('senha', e.target.value)} />
    </div>
    <button type='submit' className='btn btn-primary'>Cadastrar</button>
  </form>
)

const mapStateToProps = (state) => ({
  ...state.cadastro
})

const mapDispatchToProps = (dispatch) => ({
  changeField: (field, value) => dispatch(changeField(field, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)
