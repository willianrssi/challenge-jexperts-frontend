import React from 'react'

const Field = ({ id, label, type, value, placeholder, changeField, changeFieldId, validateError = false, errorMSG = '', disabled = false }) => (
  <div className='form-group'>
    <label htmlFor={id}>
      {label}
    </label>
    <input id={id} className={`form-control ${validateError ? 'is-invalid' : ''}`} type={type} placeholder={placeholder} value={value} onChange={(e) => changeField(changeFieldId, e.target.value)} disabled={disabled} />
    { validateError ? <small className='text-danger'>
      {errorMSG}
    </small> : <small />}
  </div>
)

export default Field
