import Taro, {Component} from '@tarojs/taro'
import {View, Text, Button} from '@tarojs/components'

class Clock extends Component {
  static defaultProps = {
    currentIndex: 1
  }
  constructor(props){
    super(props)

    this.state = {
      date: new Date(),
      isToggleOn: true,
      name: 'hello, Xiao~'
    }
  }
  componentDidMount(){
    this.timerID = setInterval(()=> this.tick(), 1000)
  }

  componentWillUnMount(){
    clearInterval(this.timeID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  onClick = (e) => {
    e.stopPropagation()
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  preventPop(name, test, e){
    e.stopPropagation()
    console.log(name, test)
  }

  handleClick = (index) => (e) => {
    e.stopPropagation()
    this.setState({
      currentIndex: index
    }, () => {
      // 在这个函数内你可以拿到 setState 之后的值
      console.log(this.props.currentIndex)
    })
  }

  render() {
    const { currentIndex } = this.props

    return (
      <View>
        <Text>Hello, world! </Text>
        <Text>现在的时间是 {this.state.date.toLocaleTimeString()}</Text>
        <Button onClick={this.onClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </Button>
        <Button onClick={this.preventPop.bind(this, this.state.name, 'test')}>test</Button>
        <View onClick={this.handleClick(currentIndex)}>
          <Text>点点点{currentIndex}</Text>
        </View>
      </View>
    )
  }
}

export default Clock