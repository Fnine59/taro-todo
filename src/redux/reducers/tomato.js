import { MINUS } from '../constants/tomato'

const INIT_STATE = {
  duration: '25:00'
}

export default function tomato (state = INIT_STATE, action) {
  switch(action.type) {
    case MINUS: 
      console.log('减一秒')
      return state
    default:
      return state
  }
}