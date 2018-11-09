import Taro from '@tarojs/taro'

export default function createId() {
  let stackTop = Taro.getStorageSync('fn-todolist-id');
  if(stackTop === ''){
    Taro.setStorage({ key: 'fn-todolist-id', data: 0 });
    return 0;
  } else {
    Taro.setStorage({ key: 'fn-todolist-id', data: stackTop + 1 });
    return stackTop + 1;
  }
}
