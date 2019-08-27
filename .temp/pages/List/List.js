import Nerv from "nervjs";
import { Component } from "@tarojs/taro-h5";
import { View, Text } from '@tarojs/components';

class Header extends Taro.Component {
  render() {
    const { user } = this.props;

    const name = user.name;
    const renderTitle = () => {
      return <View>Welcome, {name}</View>;
    };
    return <View>
      {renderTitle()}
      {renderTitle()}
      {renderTitle()}
    </View>;
  }

}

class List extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      posts: [{
        id: 1,
        title: 'Hello World',
        content: 'Welcome to learning Taro!'
      }, {
        id: 2,
        title: 'Installation',
        content: 'You can install Taro from npm.'
      }],
      header: 'Hi, nihao~'
    };
  }
  renderHeader() {
    const { header } = this.state;
    return <View>{header}</View>;
  }
  renderFooter(footer) {
    return <View>{footer}</View>;
  }
  render() {
    const { posts } = this.state;
    const sidebar = <View>
        {posts.map(post => <Text key={post.id}>
          {post.title}
        </Text>)}
      </View>;
    const content = posts.map(post => {
      return <View key={post.id}>
        <Text>{post.id} {post.title}</Text>
        <Text>{post.content}</Text>
      </View>;
    });
    return <View>
        {this.renderHeader()}
        
        <View className="divider"></View>
        
        {this.renderFooter('footer')}
        
      </View>;
  }
}
export default List;