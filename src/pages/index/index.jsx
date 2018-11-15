import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import { connect } from "@tarojs/redux"

import { 
  add,
  showModal,
  hideModal,
  clearTodo,
  getList,
  checkItem
} from "../../redux/actions/todo"

import createId from '../../utils/util'
import FnDialog from '../../components/fn-dialog'
import List from "./list"
import Modal from './modal'
import "./index.less"

@connect(
  ({ todo }) => ({
    todo
  }),
  dispatch => ({
    onAdd(payload) {
      dispatch(add(payload))
    },
    onShowModal(payload) {
      dispatch(showModal(payload))
    },
    onHideModal(payload) {
      dispatch(hideModal(payload))
    },
    onClear() {
      dispatch(clearTodo())
    },
    onGetList() {
      dispatch(getList())
    },
    onCheckItem(payload) {
      dispatch(checkItem(payload))
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

  /**
   * 点击浮动按钮的“添加待办”项
   * @param {event} e 
   */
  handleClickOpt(e) {
    if(e.detail.index === 0) { // 如果是添加待办选项
      this.props.onShowModal({
        modalType: 'add',
      })
    } else if (e.detail.index === 1) { // 如果是清空待办列表选项
      this.props.onShowModal({
        modalType: 'clear',
      })
    }
  }

  /**
   * 弹窗“取消”按钮事件
   */
  handleModalCancel() {
    this.props.onHideModal({
      modalType: 'add',
    });
  }

  /**
   * 
   * @param {string} title 
   * @param {string} desc 
   */
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

  handleCModalCancle() {
    this.props.onHideModal({
      modalType: 'clear'
    })
  }

  handleCModalConfirm() {
    this.props.onClear();
    this.props.onHideModal({
      modalType: 'clear',
    });
    this.props.onGetList();
  }
  
  handleClickItem(item, status) {
    this.props.onCheckItem({
      item,
      status,
    });
  }

  componentWillMount() {
    this.props.onGetList();
  }

  componentWillUpdate() {
  }

  render() {
    const {
      modalVisible,
      buttons,
      todoList,
      clearModalVisible,
    } = this.props.todo;
    return (
      <View class='index'>
        <List 
          dataList={todoList}
          onClickItem={this.handleClickItem}
        />
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
        <Modal 
          modalVisible={clearModalVisible}
          content='确认清空所有待办事项吗？'
          onConfirm={this.handleCModalConfirm}
          onCancel={this.handleCModalCancle}
        />
      </View>
    );
  }
}

export default Index;
