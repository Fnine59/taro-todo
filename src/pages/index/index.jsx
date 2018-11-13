import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import { connect } from "@tarojs/redux"

import { 
  add,
  showModal,
  hideModal
} from "../../redux/actions/todo"

import createId from '../../utils/createId'
import List from "./list"
import FnDialog from '../../components/fn-dialog'
import "./index.less"

@connect(
  ({ todo }) => ({
    todo
  }),
  dispatch => ({
    onAdd(payload) {
      dispatch(add(payload))
    },
    onShowModal() {
      dispatch(showModal())
    },
    onHideModal() {
      dispatch(hideModal())
    }
  })
)
class Index extends Taro.Component {
  config = {
    usingComponents: {
      "wux-floating-button": "../../components/wux/dist/floating-button/index",
    }
  };
  
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('test',this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}


  /**
   * 点击浮动按钮的“添加待办”项
   * @param {event} e 
   */
  handleClickOpt(e) {
    if(e.detail.index === 0) { // 如果是添加待办选项
      this.props.onShowModal()
    }
  }

  /**
   * 弹窗“取消”按钮事件
   */
  handleModalCancel() {
    this.props.onHideModal();
  }

  handleModalConfirm(title, desc) {
    const item = {
      data: {
        title,
        desc,
        id: createId(),
        status: false,
      },
      modalVisible: false,
    }
    this.props.onAdd(item);
  }

  render() {
    const {
      modalVisible,
      buttons,
      todoList,
    } = this.props.todo;
    return (
      <View class='index'>
        <List dataList={todoList} />
        <wux-floating-button
          position='bottomRight'
          theme='positive'
          buttons={buttons}
          onClick={this.handleClickOpt}
        />
        <FnDialog
          modalVisible={modalVisible}
          title='待办事项'
          titleHolder='请输入20字以内待办事项'
          descHolder='请输入100字以内描述信息'
          confirmText='添加'
          titleMaxLength={20}
          descMaxLength={100}
          onCancel={this.handleModalCancel}
          onConfirm={this.handleModalConfirm}
        ></FnDialog>
      </View>
    );
  }
}

export default Index;
