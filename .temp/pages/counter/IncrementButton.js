import Nerv from "nervjs";
import { Button } from "@tarojs/components";
import Taro from "@tarojs/taro-h5";

class MyIncrementButton extends Taro.Component {
  render() {
    const { onIncrement } = this.props;

    <Button onClick={onIncrement}>Increment counter</Button>;
  }

}

export default Taro.memo(MyIncrementButton);