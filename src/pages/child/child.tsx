import Taro, { Component, Config } from '@tarojs/taro'
import Counter from '../count/count'
import { CounterContext } from '../counter-context.js'

class Child extends Taro.Component {
  // shouldComponentUpdate () {
  //   // 即便返回 false 也不会阻止 CounterContext 更新消费它的组件
  //   return false
  // }
  render () {
    return <Counter />
  }
}

export default Child