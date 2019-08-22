import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import './tab.scss';
class Tab extends Component {
  constructor() {
    super(...arguments);
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentWillReceiveProps() {}
  render() {
    return <View className="tab">
        tab
      </View>;
  }
  onNewTodo = () => {
    // dosth
  };
}
export default Tab;