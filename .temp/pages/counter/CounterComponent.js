import Nerv from "nervjs";
import { useDispatch } from "@tarojs/redux-h5";
import { useCallback } from "@tarojs/taro-h5";
import { View, Text } from "@tarojs/components";
import MyIncrementButton from './IncrementButton';
export class CounterComponent extends Taro.Component {
  render() {
    const { value } = this.props;

    const dispatch = useDispatch();
    const incrementCounter = useCallback(() => dispatch({ type: 'increment-counter' }), [dispatch]);
    return <View>
      <Text>{value}</Text>
      <MyIncrementButton onIncrement={incrementCounter} />
    </View>;
  }

}