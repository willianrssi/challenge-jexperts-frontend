import React from 'react'
import Field from './Field'
import { Link } from 'react-router-dom'

const SignUpForm = ({ fields, changeField, validateErrors, submitForm }) => (
  <form onSubmit={(e) => submitForm(e)}>

    <Field id='cadastro-nome' label='Nome*' type='text' placeholder='Nome' value={fields.nome} changeField={changeField} changeFieldId='nome' validateError={validateErrors.nome} errorMSG='Campo obrigatório' />

    <Field id='cadastro-telefone' label='Telefone' type='text' placeholder='Telefone' value={fields.telefone} changeField={changeField} changeFieldId='telefone' />

    <Field id='cadastro-email' label='Email*' type='email' placeholder='Email' value={fields.email} changeField={changeField} changeFieldId='email' validateError={validateErrors.email} errorMSG='Insira um email válido' />

    <Field id='cadastro-login' label='Login*' type='text' placeholder='Login' value={fields.login} changeField={changeField} changeFieldId='login' validateError={validateErrors.login} errorMSG='Campo obrigatório' />

    <Field id='cadastro-senha' label='Senha*' type='password' placeholder='Senha' value={fields.senha} changeField={changeField} changeFieldId='senha' validateError={validateErrors.senha} errorMSG='Campo obrigatório' />

    <div className='d-flex justify-content-end'>
      <Link to='/'>
        <button className='btn btn-link mr-2' >Voltar</button>
      </Link>
      <button type='submit' className='btn btn-primary'>Cadastrar</button>
    </div>
  </form>
)

export default SignUpForm
