import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Cat from './cat'
import Mouse from './mouse'

class MouseTracker extends Taro.Component {
  render() {
    return (
      <View>
        <View>点击鼠标!</View>
        {/*
          Mouse 如何渲染由 MouseTracker 的状态控制
        */}
        <Mouse renderCat={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </View>
    );
  }
}

export default MouseTracker