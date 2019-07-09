import React from 'react'
import { Link } from 'react-router-dom'

const EditForm = ({ fields, changeField, submitForm, validateErrors, changePassword, toggleChangePassword }) => (
  <form onSubmit={(e) => submitForm(e)}>
    <div className='form-group'>
      <label htmlFor='edit-nome'>
        Nome*
      </label>
      <input id='edit-nome' className={`form-control ${validateErrors.nome ? 'is-invalid' : ''}`} type='text' placeholder='Nome' value={fields.nome} onChange={(e) => changeField('nome', e.target.value)} />
      {validateErrors.nome ? <small className='text-danger'>
        Campo obrigatório
      </small> : <small />}
    </div>
    <div className='form-group'>
      <label htmlFor='edit-telefone'>
        Telefone
      </label>
      <input id='edit-telefone' className='form-control' type='text' placeholder='Telefone' value={fields.telefone} onChange={(e) => changeField('telefone', e.target.value)} />
    </div>
    <div className='form-group'>
      <label htmlFor='edit-email'>
        Email*
      </label>
      <input id='edit-email' className={`form-control ${validateErrors.email ? 'is-invalid' : ''}`} type='email' placeholder='Email' value={fields.email} onChange={(e) => changeField('email', e.target.value)} />
      {validateErrors.email ? <small className='text-danger'>
        Campo obrigatório
      </small> : <small />}
    </div>
    <div className='form-group'>
      <label htmlFor='edit-login'>
        Login*
      </label>
      <input id='edit-login' className={`form-control ${validateErrors.login ? 'is-invalid' : ''}`} type='text' placeholder='Login' value={fields.login} onChange={(e) => changeField('login', e.target.value)} />
      {validateErrors.login ? <small className='text-danger'>
        Campo obrigatório
      </small> : <small />}
    </div>
    <div className='form-group'>
      <input type='button' className='btn btn-outline-secondary btn-sm d-block mb-2' onClick={() => toggleChangePassword()} value='Trocar Senha' />
      <label htmlFor='edit-senha'>
        Senha*
      </label>
      <input id='edit-senha' className={`form-control ${validateErrors.senha ? 'is-invalid' : ''}`} type='password' disabled={!changePassword} placeholder='Senha' value={fields.senha} onChange={(e) => changeField('senha', e.target.value)} />
      {validateErrors.senha ? <small className='text-danger'>
        Campo obrigatório
      </small> : <small />}
    </div>
    <div className='d-flex justify-content-end'>
      <Link to='/'>
        <button className='btn btn-link mr-2' >Voltar</button>
      </Link>
      <button type='submit' className='btn btn-primary'>Atualizar</button>
    </div>
  </form>
)

export default EditForm
