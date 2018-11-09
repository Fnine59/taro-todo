import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import { connect } from "@tarojs/redux"

import { 
  add,
  showModal,
  hideModal
} from "../../redux/actions/todo"

import List from "./list"
import FnDialog from '../../components/fn-dialog'
import "./index.less"

@connect(
  ({ todo }) => ({
    todo
  }),
  dispatch => ({
    add() {
      dispatch(add())
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
      todoList: [
        {
          id: 0,
          title: "去吃午饭",
          desc: "eat lunch",
          status: false
        },
        {
          id: 1,
          title: "eat dinner",
          desc: "去吃晚饭",
          status: true
        },
        {
          id: 2,
          title: "learn taro",
          desc: "学习taro",
          status: true
        }
      ],
      
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
    console.log(title, desc)
    this.props.onHideModal();
  }

  render() {
    const {
      modalVisible,
      buttons,
    } = this.props.todo;
    return (
      <View class='index'>
        <List dataList={this.state.todoList} />
        <wux-floating-button
          position='bottomRight'
          theme='positive'
          buttons={buttons}
          onClick={this.handleClickOpt}
        />
        <FnDialog
          modalVisible={modalVisible}
          title='待办事项'
          titleHolder='请输入待办事项'
          descHolder='请输入描述信息'
          onCancel={this.handleModalCancel}
          onConfirm={this.handleModalConfirm}
        ></FnDialog>
      </View>
    );
  }
}

export default Index;
