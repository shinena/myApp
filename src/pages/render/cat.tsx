import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'

import catImage from './cat.jpg'
class Cat extends Taro.Component {
  static defaultProps = {
    mouse: {
      x: 0,
      y: 0
    }
  }

  render() {
    const { mouse } = this.props;
    return (
      <Image src={catImage} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

export default Cat