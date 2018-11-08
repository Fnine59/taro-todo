import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/tomato/index'
    ],
    window: {
      navigationBarBackgroundColor: '#C5D9E8',
      navigationBarTitleText: '待办清单',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      backgroundColor: '#FAFBFC',
      color: '#C5D9E8',
      selectedColor: '#346FC2',
      list: [{
        text: '待办',
        pagePath: 'pages/index/index',
        iconPath: './assets/tabBar/todo.png',
        selectedIconPath: './assets/tabBar/todo-select.png'
      },
      {
        text: '番茄',
        pagePath: 'pages/tomato/index',
        iconPath: './assets/tabBar/tomato.png',
        selectedIconPath: './assets/tabBar/tomato-select.png'
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
