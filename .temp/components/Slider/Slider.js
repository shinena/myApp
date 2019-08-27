import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View, Text, Slider, Switch } from '@tarojs/components';
export default class PageView extends Component {
  constructor() {
    super(...arguments);
  }
  render() {
    return <View className="components-page">
        <Text>设置 step</Text>
        <Text>显示当前 value</Text>
        <Slider step={1} blockSize={16} />
        <Text>设置最小/最大值</Text>
        <Slider step={1} value={100} showValue min={50} max={200} />
        <Text>默认样式</Text>
        <Switch checked />
        <Switch />
        <Text>推荐展示样式</Text>
        <Switch checked />
        <Switch />
      </View>;
  }
}