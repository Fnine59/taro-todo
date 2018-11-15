import Taro from '@tarojs/taro'
import { View } from '@tarojs/component'
import PropTypes from 'prop-types'

import './clock.less'

export default class Clock extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View class='clock-container'>
        <View class='clock'>
          {this.props.time}
        </View>
      </View>
    )
  }
}

Clock.defaultProps = {
  time: '25:00',
}

Clock.propTypes = {
  time: PropTypes.string,
}
