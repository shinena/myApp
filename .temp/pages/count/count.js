import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import { CounterContext } from "../counter-context";
class Counter extends Taro.Component {
  render() {
    const value = this.context;
    console.log(value);
    return <View>
        Count: {value}
      </View>;
  }
}
Counter.contextType = CounterContext;
export default Counter;