import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'
import configStore from './store'

import Index from './pages/index'
import 'taro-ui/dist/style/index.scss'
import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

// const store = configStore()
const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      backgroundColor:'#eeeeee',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat接口功能演示',
      navigationBarTextStyle: 'black'
    }
  }

  // 监听程序初始化，初始化完成时触发（全局只触发一次）
  // 在此生命周期中通过 this.$router.params，可以访问到程序初始化参数
  componentWillMount(){}

  // 监听程序初始化，初始化完成时触发（全局只触发一次）
  // 在此生命周期中也可以通过 this.$router.params，访问到程序初始化参数，与 componentWillMount 中一致
  componentDidMount () {}

  // 程序启动，或从后台进入前台显示时触发，微信小程序中也可以使用 Taro.onAppShow 绑定监听
  // 在此生命周期中通过 this.$router.params，可以访问到程序初始化参数
  // 参数与 componentWillMount 中获取的基本一致
  componentDidShow () {}

  // 程序从前台进入后台时触发，微信小程序中也可以使用 Taro.onAppHide 绑定监听
  componentDidHide () {}

  // 程序发生脚本错误或 API 调用报错时触发，微信小程序中也可以使用 Taro.onError 绑定监听
  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
