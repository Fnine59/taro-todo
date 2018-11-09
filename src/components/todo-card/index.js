import Taro from "@tarojs/taro"
import PropTypes from "prop-types"
import { View } from "@tarojs/components"
import { AtIcon } from "taro-ui"

import FnCheckbox from "../fn-checkbox"
import "./index.less"

export default class TodoCard extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleClass: `${this.props.status 
        ? 'todo-card-content-title todo-card-content-title-check' 
        : 'todo-card-content-title'}`,
      iconColor: `${this.props.status ? '#B2B2B2' :'#78A4FA'}`,
      cardClass: `${this.props.status ? 'todo-card todo-card-checked' : 'todo-card'}`
    };
  }

  handleClick(status) {
    this.setState({
      titleClass: `${status 
        ? 'todo-card-content-title todo-card-content-title-check' 
        : 'todo-card-content-title'}`,
      iconColor: `${status ? '#B2B2B2' :'#78A4FA'}`,
      cardClass: `${status ? 'todo-card todo-card-checked' : 'todo-card'}`
    })
  }

  render() {
    return (
      <View className={this.state.cardClass}>
        <View className='todo-card-content'>
          <AtIcon className='todo-card-content-icon' value='bookmark' size='28' color={this.state.iconColor} />
          <View>
            <View className={this.state.titleClass}>{this.props.title}</View>
            <View className='todo-card-content-desc'>{this.props.desc}</View>
          </View>
        </View>
        <FnCheckbox 
          status={this.props.status} 
          size='default'
          onClick={this.handleClick}
        />
      </View>
    );
  }
}

TodoCard.defaultProps = {
  title: "待办事项",
  desc: "描述信息",
  status: false,
};

TodoCard.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  status: PropTypes.bool,
};
