import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { PropTypes } from 'nervjs';

import TodoCard from '../../components/todo-card';

export default class TodoCardList extends Taro.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const dataList = this.props.dataList
    const listItem = dataList.map((item) => {
      return <TodoCard
        key={String(item.id)}
        title={item.title}
        desc={item.desc}
        status={item.status}
      ></TodoCard>
    })
    return (
      <View>
        {listItem}
      </View>
    )
  }

}

TodoCardList.defaultProps = {
  dataList: [{
    title: '待办事项A',
    desc: '描述信息A',
    status: false,
    id: 0
  },{
    title: '待办事项B',
    desc: '描述信息B',
    status: false,
    id: 1
  }]
}

TodoCardList.propTypes = {
  dataList: PropTypes.array,
}