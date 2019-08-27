import Nerv from "nervjs";
import Taro from "@tarojs/taro-h5";
import { View } from '@tarojs/components';
class Mouse extends Taro.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleClick.bind(this);
    this.state = { x: 0, y: 0 };
  }
  handleClick(event) {
    const { x, y } = event.detail;
    this.setState({
      x,
      y
    });
  }
  render() {
    return <View style={{ height: '100%' }} onClick={this.handleClick}>

        
        {this.props.renderCat(this.state)}
      </View>;
  }
}
export default Mouse;