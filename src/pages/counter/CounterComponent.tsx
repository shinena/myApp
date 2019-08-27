import { useDispatch } from "@tarojs/redux";
import { useCallback } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import MyIncrementButton from './IncrementButton'

export const CounterComponent = ({value}) => {
  const dispatch = useDispatch()
  const incrementCounter = useCallback(
    () => dispatch({type: 'increment-counter'}),
    [dispatch]
  )
  return (
    <View>
      <Text>{value}</Text>
      <MyIncrementButton onIncrement={incrementCounter}/>
    </View>
  )
}
