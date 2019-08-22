import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

class MyComponent extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  static defaultProps = {
    isEnable: true
  }
  state = {
    myTime: 12
  }
  
  clickHandler(e){
    console.log(e)
  }
  render () {
    const { isEnable } = this.props     // ✓ 正确
    const { myTime } = this.state     // ✓ 正确
    return (
      <View className='test' onClick={this.clickHandler}>
        {isEnable && <Text className='test_text'>{myTime}</Text>}
      </View>
    )
  }
}

export default MyComponent
