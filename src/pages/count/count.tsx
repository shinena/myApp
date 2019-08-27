
import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import { CounterContext } from '../counter-context.js'

class Counter extends Taro.Component {
  static contextType = CounterContext

  render() {
    const value = this.context
    console.log(value)
    return (
      <View>
        Count: {value}
      </View>
    )
  }
}

export default Counter