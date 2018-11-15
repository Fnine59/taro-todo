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
  let stackTop = Taro.getStorageSync('fn-todo-id');
  if(stackTop === ''){
    Taro.setStorage({ key: 'fn-todo-id', data: 0 });
    return 0;
  } else {
    Taro.setStorage({ key: 'fn-todo-id', data: stackTop + 1 });
    return stackTop + 1;
  }
}

export function idToHash(arr) {
  let confirmArr = [];
  arr.forEach(element => {
    confirmArr[element.id] = element;
  })
  return confirmArr;
}