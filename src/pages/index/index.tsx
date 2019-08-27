import Taro, { Component, Config, useState } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import * as Actions from '../../actions/counter'
import { bindActionCreators } from 'redux'

import MyComponent from '../Text/Text'
import Clock from '../Clock/Clock'
import List from '../List/List'
import './index.scss'
import Tab from '../../components/tab/tab'
import { CounterContext } from '../counter-context'

import Child from '../child/child'
import MouseTracker from '../render/MouseTracker'
import PagePicker from '../../components/Picker/Picker'
import Picks from '../../components/PickerView/PickerView'
import PageView from '../../components/Slider/Slider'
import { AtButton, AtFab, AtCalendar } from 'taro-ui'

// !!! 组件引入路径直到文件名，而不是文件夹
import CounterComponent from '../counter/CounterComponent'

import { add, minus, asyncAdd } from '../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
// function mapStateToProps(state) {
//   return {
//     counter: state.counter.toJS()
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     ...bindActionCreators(Actions, dispatch)
//   }
// }
// @connect(mapStateToProps, mapDispatchToProps)

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  constructor() {
    super(...arguments)
    this.state = {
      title: '首页',
      myTime: 12,
      list: [1, 2, 3]
    }
  }
  config: Config = {
    navigationBarTitleText: '首页',
    navigationBarBackgroundColor: 'black'
  }
  // 页面加载时触发，一个页面只会调用一次，此时页面 DOM 尚未准备好，还不能和视图层进行交互
  componentWillMount() { }
  // 页面初次渲染完成时触发，一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
  componentDidMount() { }

  // 页面是否需要更新，返回 false 不继续更新，否则继续走更新流程
  shouldComponentUpdate(nextProps, nextState) { }
  // 页面即将更新
  componentWillUpdate() { }
  // 页面更新完毕
  componentDidUpdate() { }
  // 页面卸载时触发，如 redirectTo 或 navigateBack 到其他页面时
  componentWillUnmount() { }
  // 页面显示/切入前台时触发
  componentDidShow() { }
  // 页面隐藏/切入后台时触发， 如 navigateTo 或底部 tab 切换到其他页面，小程序切入后台等
  componentDidHide() { }

  add = (e) => {
    //
  }
  render() {
    const [count, setCount] = useState(0)
    console.log(count,'5888')
    return (
      <View className='index'>
        <Text>Hello world</Text>
        <View className='todo'>
        <Button className='add_btn' onClick={this.props.add}>+</Button>
        <Button className='dec_btn' onClick={this.props.dec}>-</Button>
        <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
        <View>{this.props.counter.num}</View>
        
        </View>
        <CounterComponent />
        <PagePicker />
        <PageView />
        <AtCalendar isMultiSelect currentDate={{start: '2018/10/28', end:
'2018/11/11'}}/>
        <AtFab>
          <Text className='at-fab__icon at-icon at-icon-menu'></Text>
        </AtFab>
        <AtButton className='my-button' type='primary'>按钮文案</AtButton>
        {/* <Picks /> */}
        {/* <MouseTracker/> */}
        {/* <CounterContext.Provider value={ count }>
          <View className='container'>
            <Child />
            <Text>{count}</Text>
            <Button onClick={() => setCount(0)}>Reset</Button>
            <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>
            <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>
          </View>
        </CounterContext.Provider> */}
        {/* <View className='title'>{this.state.title}</View>
        <View className='content'>
          {this.state.list.map(item => {
            return (
              <View className='item' key={item.id}>{item}</View>
            )
          })}
          <Button className='add' onClick={this.add}>添加</Button>
        </View> */}

      {/* <MyComponent isEnable={true} number={10}/> */}
      {/* <Tab></Tab> */}
      {/* <Clock currentIndex={1}/> */}
      {/* <List /> */}
      </View>
    )
  }
}
