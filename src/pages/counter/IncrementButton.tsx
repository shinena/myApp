import { Button } from "@tarojs/components";
import Taro from "@tarojs/taro";

const MyIncrementButton = ({onIncrement}) => {
  <Button onClick={onIncrement}>Increment counter</Button>
}

export default Taro.memo(MyIncrementButton)