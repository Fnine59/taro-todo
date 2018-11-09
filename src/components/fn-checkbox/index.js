import Taro from "@tarojs/taro"
import PropTypes from "prop-types"
import { View } from "@tarojs/components"

import "./index.less"

export default class FnCheckbox extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: this.props.status, // false 未选中 true 选中
      className: this.props.status === true 
      ? `fn-checkbox fn-checkbox-${this.props.size} fn-checkbox-choosed` 
      : `fn-checkbox fn-checkbox-${this.props.size}`,
    }
  }

  handleClick() {
    this.setState({
      className: this.state.flag === false 
      ? `fn-checkbox fn-checkbox-${this.props.size} fn-checkbox-choosed` 
      : `fn-checkbox fn-checkbox-${this.props.size}`,
      flag: !this.state.flag,
    }, () => {
      if(this.props.onClick) {
        this.props.onClick(this.state.flag)
      }
      return;
    })
    
   
  }

  render() {
    return (
      <View 
        className={this.state.className}
        onClick={this.handleClick.bind(this)}
      >
        {this.state.flag && <View className='fn-checkbox-icon'>✔</View>}
      </View>
    )
  }
}

FnCheckbox.defaultProps = {
  size: 'default',
  status: false,
};

FnCheckbox.propTypes = {
  status: PropTypes.bool,
  size: PropTypes.string,
  onClick: PropTypes.func,
};
