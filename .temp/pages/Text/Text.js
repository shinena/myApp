import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';
class MyComponent extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      myTime: 12
    };
  }
  clickHandler(e) {
    console.log(e);
  }
  render() {
    const { isEnable, number } = this.props; // ✓ 正确
    const { myTime } = this.state; // ✓ 正确
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    let description;
    if (number % 2 == 0) {
      description = <Text>even</Text>;
    } else {
      description = <Text>odd</Text>;
    }
    return <View className="test" onClick={this.clickHandler}>
        {isEnable && <Text className="test_text">{myTime}</Text>}
        <View>{number} is an {description} number</View>
        <ul>
          {todos.map(todo => <li><Text>{todo}</Text></li>)}
        </ul>
      </View>;
  }
}
/**
 * 指定config的类型声明为: Taro.Config
 *
 * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
 * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
 * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
 */
MyComponent.defaultProps = {
  isEnable: true,
  number: 5
};
export default MyComponent;