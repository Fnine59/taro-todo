import {
  ADD,
  SHOWMODAL,
  HIDEMODAL,
  CLEARTODO,
  GETLIST,
  CHECKITEM,
} from '../constants/todo'

export const add = (payload) => {
  return {
    type: ADD,
    payload
  }
}

export const showModal = (payload) => {
  return {
    type: SHOWMODAL,
    payload
  }
}

export const hideModal = (payload) => {
  return {
    type: HIDEMODAL,
    payload
  }
}

export const clearTodo = () => {
  return {
    type: CLEARTODO,
  }
}

export const getList = () => {
  return {
    type: GETLIST,
  }
}

export const checkItem = (payload) => {
  return {
    type: CHECKITEM,
    payload,
  }
}