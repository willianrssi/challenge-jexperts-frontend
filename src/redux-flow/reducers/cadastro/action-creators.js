import { CHANGE_FIELD } from './actions'

export const changeField = (field, value) => ({
  type: CHANGE_FIELD,
  payload: {
    field,
    value
  }
})