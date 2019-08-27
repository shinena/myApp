import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import Counter from '../count/count';
class Child extends Taro.Component {
  // shouldComponentUpdate () {
  //   // 即便返回 false 也不会阻止 CounterContext 更新消费它的组件
  //   return false
  // }
  render() {
    return <Counter />;
  }
}
export default Child;