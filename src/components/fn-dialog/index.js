import Taro from "@tarojs/taro"
import { Button } from "@tarojs/components"
import PropTypes from "prop-types"
import {
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtInput,
} from "taro-ui"

export default class FnDialog extends Taro.Component {
  config = {
  };

  constructor(props) {
    super(props)
    this.state = {
      titleValue: '',
      descValue: '',
    };
  }

  componentWillReceiveProps (nextProps) {
  }

  componentWillUnmount() {
    console.log('unmount')
  }

  handleCancel() {
    if(this.props.onCancel){
      this.props.onCancel()
    }
    if(this.props.whetherDistory){
      this.setState({
        titleValue: '',
        descValue: '',
      })
    } 
  }

  handleConfirm() {
    if(this.props.onConfirm){
      this.props.onConfirm(this.state.titleValue, this.state.descValue)
    } 
    if(this.props.whetherDistory){
      this.setState({
        titleValue: '',
        descValue: '',
      })
    } 
  }

  handleChangeTitle(value) {
    this.setState({
      titleValue: value
    })
  }

  handleChangeDesc(value) {
    this.setState({
      descValue: value
    })
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
          <AtInput 
            placeholder={this.props.titleHolder} 
            value={this.state.titleValue}
            onChange={this.handleChangeTitle}
            maxlength={this.props.titleMaxLength ? this.props.titleMaxLength : 999}
          ></AtInput>
          <AtInput 
            placeholder={this.props.descHolder} 
            value={this.state.descValue}
            onChange={this.handleChangeDesc}
            maxlength={this.props.descMaxLength ? this.props.descMaxLength : 999}
          ></AtInput>
          {/* {this.props.modalVisible &&<AtTextarea
            placeholder={this.props.descHolder} 
            value={this.state.descValue}
            onChange={this.handleChangeDesc}
            maxlength={this.props.descMaxLength ? this.props.descMaxLength : 999}
          />} */}
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
  titleHolder: "请输入标题",
  descHolder: "请输入描述信息",
  modalVisible: false,
  whetherDistory: true,
};

FnDialog.propTypes = {
  modalVisible: PropTypes.bool,
  whetherDistory: PropTypes.bool,
  titleMaxLength: PropTypes.number,
  descMaxLength: PropTypes.number,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  titleHolder: PropTypes.string,
  descHolder: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
};
