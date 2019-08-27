import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { Image } from '@tarojs/components';
import catImage from './cat.jpg';
class Cat extends Taro.Component {
  render() {
    const { mouse } = this.props;
    return <Image src={catImage} style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />;
  }
}
Cat.defaultProps = {
  mouse: {
    x: 0,
    y: 0
  }
};
export default Cat;