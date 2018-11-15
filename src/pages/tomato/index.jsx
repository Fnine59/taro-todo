import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import {
  initClock,
  startWorkClock,
  computedTime,
  stopWorkClock,
  showModal,
  hideModal,
} from "../../redux/actions/tomato";

import Modal from '../../components/fn-confirm-dialog';
import TomatoTime from "./clock";
import "./index.less";

@connect(
  ({ tomato }) => ({
    tomato
  }),
  dispatch => ({
    onInitClock() {
      dispatch(initClock());
    },
    onStart() {
      dispatch(startWorkClock());
    },
    onStop() {
      dispatch(stopWorkClock());
    },
    onComputed() {
      dispatch(computedTime());
    },
    onShowModal() {
      dispatch(showModal());
    },
    onHideModal() {
      dispatch(hideModal());
    },
  })
)
class Tomato extends Taro.Component {
  config = {
    navigationBarTitleText: "番茄计时"
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    // this.props.onInitClock();
  }

  componentWillReceiveProps() {
  }

  componentDidMount() {}

  handleStart(e) {
    const btnText = e.target.dataset.text;
    const that = this;
    if (btnText === "开始") {
      this.props.onStart();
      this.timerId = setInterval(() => {
        that.props.onComputed();
      }, 1000);
    } else if (btnText === "停止") {
      if(this.props.tomato.currentDurationMills < this.props.tomato.durationMills - this.props.tomato.durationMills / 5) {
        this.props.onShowModal();
      } else {
        this.props.onStop();
        clearInterval(this.timerId);
      }
    }
  }

  handleModalConfirm() {
    this.props.onStop();
    clearInterval(this.timerId);
    this.props.onHideModal();
  }

  handleModalCancle() {
    this.props.onHideModal();
  }

  render() {
    const { 
      durationText,
      btnText,
      modalVisible
    } = this.props.tomato;
    return (
      <View className='tomato'>
        <TomatoTime className='tomato-clock' time={durationText} />
        <View className='hint'>番茄时钟最长支持60分钟</View>
        <View className='hint'>
          可点击待办页面右下角加号中的“设置”按钮进行设置
        </View>
        <View
          className='tomato-btn'
          onClick={this.handleStart}
          data-text={btnText}
        >
          {btnText}
        </View>
        <Modal 
          modalVisible={modalVisible}
          content='确认要放弃这个番茄吗？'
          onConfirm={this.handleModalConfirm}
          onCancel={this.handleModalCancle}
        />
      </View>
    );
  }
}

export default Tomato;
