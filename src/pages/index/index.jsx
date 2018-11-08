import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import TodoCardList from "../../components/todo-card-list";
import "./index.less";

@connect(
  ({ todo }) => ({
    todo
  }),
  dispatch => ({
    // add () {
    //   dispatch(add())
    // },
    // dec () {
    //   dispatch(minus())
    // },
    // asyncAdd () {
    //   dispatch(asyncAdd())
    // }
  })
)
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        {
          id: 0,
          title: "去吃午饭",
          desc: "eat lunch",
          status: false,
        },
        {
          id: 1,
          title: "eat dinner",
          desc: "去吃晚饭",
          status: true,
        },
        {
          id: 2,
          title: "eat dinner",
          desc: "去吃晚饭",
          status: true,
        },
        {
          id: 3,
          title: "eat dinner",
          desc: "去吃晚饭",
          status: true,
        },
        {
          id: 4,
          title: "eat dinner",
          desc: "去吃晚饭",
          status: true,
        },
        {
          id: 5,
          title: "eat dinner",
          desc: "去吃晚饭",
          status: true,
        }
      ]
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View class='todo-card'>
        <TodoCardList dataList={this.state.todoList} />
      </View>
    );
  }
}

export default Index;
