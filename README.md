# todoMiniProgram

    基于 taro 1.1.1 版本搭建的todo list小程序。
    taro是一个支持一套代码编译为多端代码的框架，现已支持微信小程序、支付宝小程序、百度小程序、H5及React Native。

## 项目中自定义组件

鉴于项目中使用带短横线`-`的组件库十分麻烦，而官方推荐使用的taro-ui又无法满足需求，因此进行了简单的组件封装，下面是自行封装的组件文档。

### 复选框 FnCheckbox

    封装这个组件是因为taro-ui中的复选框必须带有label，带有列表似的边框样式难以去除，以及默认居左的样式难以修改。

属性名 | 类型 | 默认值 | 可选值 | 说明
---|---|---|---|---
size | string | 'default' | small：较小尺寸<br/>default：默认大小<br/>default：较大尺寸<br/> | 设置复选框的大小
status | bool | false | true：默认选中<br>false: 默认未选中 | 设置复选框的初始状态
onClick(status) | func | --- | --- | 暴露出来的复选框点击事件，会在执行完复选框点击样式变更等操作后调用，入参为status，即复选框当前的选中状态

### 待办卡片 TodoCard

该组件通用性较差，为针对本次项目进行封装的组件。

效果图如下。

![效果](https://ws1.sinaimg.cn/large/006gU7ahly1fx0sc5uv7qj308d04at8m.jpg)

属性名 | 类型 | 默认值 | 可选值 | 说明
---|---|---|---|---
title | string | '待办事项' | 任意字符串 | 卡片的标题 
desc | string | '描述信息' | 任意字符串 | 卡片描述信息
status | bool | false | true：状态已完成<br>false: 状态未完成 | 用于指定卡片显示为已完成状态/未完成状态

### 待办卡片列表 TodoCardList

该组件通用性较差，为针对本次项目进行封装的组件。

属性名 | 类型 | 默认值 | 可选值 | 说明
---|---|---|---|---
dataList | array | 如下 | 满足结构的任意数组 | 待办列表信息，每条信息中必含且仅可含`title`,`desc`,`status`,`id`四项。 

```js
[{
    title: '待办事项A',
    desc: '描述信息B',
    status: false,
    id: 0
},{
    title: '待办事项B',
    desc: '描述信息B',
    status: false,
    id: 1
}]
```