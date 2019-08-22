import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

import MyComponent from '../Text/Text'
import './index.scss'
import Tab from '../../components/tab/tab'
// !!! 组件引入路径直到文件名，而不是文件夹

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
    return (
      <View className='index'>
        <Text>Hello world</Text>
        <View className='title'>{this.state.title}</View>
        <View className='content'>
          {this.state.list.map(item => {
            return (
              <View className='item' key={item.id}>{item}</View>
            )
          })}
          <Button className='add' onClick={this.add}>添加</Button>
        </View>

      <MyComponent isEnable={true}/>
      <Tab></Tab>
      </View>
    )
  }
}
