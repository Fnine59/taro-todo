import {
  ADD,
  SHOWMODAL,
  HIDEMODAL
} from '../constants/todo'

export const add = (payload) => {
  return {
    type: ADD,
    payload
  }
}

export const showModal = () => {
  return {
    type: SHOWMODAL
  }
}

export const hideModal = () => {
  return {
    type: HIDEMODAL
  }
}