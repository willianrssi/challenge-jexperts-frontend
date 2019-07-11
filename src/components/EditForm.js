import React from 'react'
import { Link } from 'react-router-dom'
import Field from './Field'

const EditForm = ({ fields, changeField, submitForm, validateErrors, changePassword, toggleChangePassword }) => (
  <form onSubmit={(e) => submitForm(e)}>
    <Field id='edit-nome' label='Nome*' type='text' placeholder='Nome' value={fields.nome} changeField={changeField} changeFieldId='nome' validateError={validateErrors.nome} errorMSG='Campo obrigatório' />

    <Field id='edit-telefone' label='Telefone' type='text' placeholder='Telefone' value={fields.telefone} changeField={changeField} changeFieldId='telefone' />

    <Field id='edit-email' label='Email*' type='email' placeholder='Email' value={fields.email} changeField={changeField} changeFieldId='email' validateError={validateErrors.email} errorMSG='Insira um email válido' />

    <Field id='edit-login' label='Login*' type='text' placeholder='Login' value={fields.login} changeField={changeField} changeFieldId='login' validateError={validateErrors.login} errorMSG='Campo obrigatório' />

    <input type='button' className='btn btn-outline-secondary btn-sm d-block mb-2' onClick={() => toggleChangePassword()} value='Trocar Senha' />

    <Field id='edit-senha' label='Senha*' type='password' placeholder='Senha' value={fields.senha} changeField={changeField} changeFieldId='senha' validateError={validateErrors.senha} errorMSG='Campo obrigatório' disabled={!changePassword} />

    <div className='d-flex justify-content-end'>
      <Link to='/'>
        <button className='btn btn-link mr-2' >Voltar</button>
      </Link>
      <button type='submit' className='btn btn-primary'>Atualizar</button>
    </div>
  </form>
)

export default EditForm
