import {
  millToMinute
} from '../../utils/util'
import { 
  INIT,
  STARTWORK,
  COMPUTED,
  STOPWORK,
  SHOWMODAL,
  HIDEMODAL
} from '../constants/tomato'

const INIT_STATE = {
  modalVisible: false,
  btnText: '开始', // 番茄时钟按钮展示字样
  durationText: '25:00',
  durationMills: 1500000, // 用户设置的一个番茄的时长
  currentDurationMills: 1500000, // 本次番茄剩余时长
}

export default function tomato (state = INIT_STATE, action) {
  const { type, payload } = action;
  switch(type) {
    case INIT:
      return {
        ...state,
      };
    case STARTWORK:
      const startWorkTime = Date.parse(new Date());
      return {
        ...state,
        btnText: '停止',
        startWorkTime,
        currentDurationMills: state.durationMills,
      }
    
    case STOPWORK:
      return {
        ...state,
        btnText: '开始',
        currentDurationMills: state.durationMills,
        durationText: millToMinute(state.durationMills)
      }
      
    case COMPUTED: 
      const durationText = millToMinute(state.currentDurationMills - 1000);
      return {
        ...state,
        durationText,
        currentDurationMills: state.currentDurationMills - 1000,
      }
    case SHOWMODAL:
      return {
        ...state,
        ...payload,
        modalVisible: true,
      }
    case HIDEMODAL:
      return {
        ...state,
        ...payload,
        modalVisible: false,
      }
    default:
      return state
  }
}