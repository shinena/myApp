import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
import Cat from './cat';
import Mouse from './mouse';
class MouseTracker extends Taro.Component {
  render() {
    return <View>
        <View>点击鼠标!</View>
        
        <Mouse renderCat={mouse => <Cat mouse={mouse} />} />
      </View>;
  }
}
export default MouseTracker;