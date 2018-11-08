import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { connect } from '@tarojs/redux'


@connect(({ tomato }) => ({
  tomato
}), (dispatch) => ({
}))
class Tomato extends Component {

  config = {
    navigationBarTitleText: '番茄计时'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='tomato'>
      </View>
    )
  }
}

export default Tomato
