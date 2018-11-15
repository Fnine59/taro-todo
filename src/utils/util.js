import Taro from '@tarojs/taro'

/**
 * 用于从本地存储中获取数据
 * @param {string} key 
 */
export function getStorage(key) {
  return Taro.getStorage({
    key,
  })
}

/**
 * 用于从本地存储中同步获取数据
 * @param {string} key 
 */
export function getStorageSync(key) {
  return Taro.getStorageSync(key);
}

/**
 * 用于向本地存储中写入数据
 * @param {string} key 
 * @param {string} value 
 */
export function setStorage(key, value) {
  return Taro.setStorage({
    key,
    data: value,
  })
}

/**
 * 用于清空本地数据缓存
 * @param {string} key 
 */
export function clearStorage(key) {
  return Taro.removeStorage({
    key,
  })
}

/**
 * 用于生成唯一ID
 */
export default function createId() {
  let stackTop = getStorageSync('fn-todo-id');
  if(stackTop === ''){
    setStorage('fn-todo-id', 0);
    return 0;
  } else {
    setStorage('fn-todo-id', stackTop + 1);
    return stackTop + 1;
  }
}

/**
 * 将数组中每一项的id作为该项下标，用于提高查询效率
 * @param {Array} arr 
 */
export function idToHash(arr) {
  let confirmArr = [];
  arr.forEach(element => {
    confirmArr[element.id] = element;
  })
  return confirmArr;
}

export function millToMinute(millisecond) {
  const second = Math.floor(millisecond / 1000);
  console.log('得到的秒数', second);
  const minute = Math.floor(second / 60);
  console.log('得到的分钟数', minute);
  const secondWithoutMinute = second - minute * 60;
  console.log('得到的用于显示的秒数', secondWithoutMinute);
  let minuteStr = minute.toString();
  if(minuteStr.length < 2) {
    minuteStr = '0' + minuteStr;
  }
  let secondStr = secondWithoutMinute.toString();
  if(secondStr.length < 2) {
    secondStr = '0' + secondStr;
  }
  const timeStr = minuteStr + ':' + secondStr;
  console.log('展示用串', timeStr);
  return timeStr;
}