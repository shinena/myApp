import Taro, {Component} from '@tarojs/taro'
import {View, Text, Button} from '@tarojs/components'

function Header({user}) {
  const name = user.name
  const renderTitle = () => {
    return <View>Welcome, {name}</View>
  }
  return (
    <View>
      {renderTitle()}
      {renderTitle()}
      {renderTitle()}
    </View>
  )
}

class List extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'Hello World',
        content: 'Welcome to learning Taro!'
      }, {
        id: 2,
        title: 'Installation',
        content: 'You can install Taro from npm.'
      }
    ],
    header: 'Hi, nihao~'
  }

  renderHeader() {
    const {header} = this.state
    return <View>{header}</View>
  }
  renderFooter(footer) {
    return <View>{footer}</View>
  }

  render() {
    const {posts} = this.state
    const sidebar = (
      <View>
        {posts.map((post) => <Text key={post.id}>
          {post.title}
        </Text>)}
      </View>
    )
    const content = posts.map((post) => {
      return <View key={post.id}>
        <Text>{post.id} {post.title}</Text>
        <Text>{post.content}</Text>
      </View>
    })

    return (
      <View>
        {this.renderHeader()}
        {/* {sidebar} */}
        <View className="divider"></View>
        {/* {content} */}
        {this.renderFooter('footer')}
        {/* {this.Header()} */}
      </View>
    )
  }
}

export default List