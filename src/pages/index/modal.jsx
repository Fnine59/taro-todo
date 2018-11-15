import Taro from "@tarojs/taro"
import { Button } from "@tarojs/components"
import PropTypes from "prop-types"
import {
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
} from "taro-ui"

export default class FnDialog extends Taro.Component {
  config = {
  };

  constructor(props) {
    super(props)
    this.state = {
    };
  }

  handleCancel() {
    if(this.props.onCancel){
      this.props.onCancel();
    }
  }

  handleConfirm() {
    if(this.props.onConfirm){
      this.props.onConfirm();
    } 
  }
    
  /**
   * 因为获取不到点击蒙层关闭的回调事件
   * 因此使用这个方法在无论因为什么原因每次关闭时，都将组件state中的modalVisible更新为false
   * 以保证组件能够由数据驱动重新渲染
   */
  handleClose() {
    if(this.props.onCancel){
      this.props.onCancel();
    }
  }

  render() {
    return (
      <AtModal 
        isOpened={this.props.modalVisible}
        onClose={this.handleClose}
      >
        <AtModalHeader>{this.props.title}</AtModalHeader>
        <AtModalContent>
          {this.props.content}
        </AtModalContent>
        <AtModalAction>
          <Button 
            onClick={this.handleCancel.bind(this)}
          >{this.props.cancelText}</Button>
          <Button 
            onClick={this.handleConfirm.bind(this)}
          >{this.props.confirmText}</Button>
        </AtModalAction>
      </AtModal>
    );
  }
}

FnDialog.defaultProps = {
  title: "标题",
  cancelText: "取消",
  confirmText: "确认",
  content: "",
  modalVisible: false,
};

FnDialog.propTypes = {
  modalVisible: PropTypes.bool,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  content: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};
