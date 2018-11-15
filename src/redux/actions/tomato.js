import {
  INIT,
  STARTWORK,
  STOPWORK,
  COMPUTED,
  SHOWMODAL,
  HIDEMODAL
} from '../constants/tomato'

export const initClock = () => {
  return {
    type: INIT,
  }
}

export const startWorkClock = () => {
  return {
    type: STARTWORK,
  }
}

export const stopWorkClock = () => {
  return {
    type: STOPWORK,
  }
}

export const computedTime = () => {
  return {
    type: COMPUTED,
  }
}

export const showModal = (payload) => {
  return {
    type: SHOWMODAL,
    payload,
  }
}

export const hideModal = (payload) => {
  return {
    type: HIDEMODAL,
    payload,
  }
}