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
    usingComponents: {
      "wux-cell-group": "../../components/wux/dist/cell-group/index",
      "wux-cell": "../../components/wux/dist/cell/index",
      "wux-input": "../../components/wux/dist/input/index",
      "wux-textarea": "../../components/wux/dist/textarea/index"
    }
  };

  constructor(props) {
    super(props)
    console.log('props', props)
    this.state = {
      titleValue: '',
      descValue: '',
    };
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

  render() {
    return (
      <AtModal isOpened={this.props.modalVisible}>
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
