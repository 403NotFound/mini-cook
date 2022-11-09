import { Component } from 'react'
import { View } from '@tarojs/components'
import './index.scss'
import { AtSearchBar } from 'taro-ui'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  onChange(value) {
    this.setState({
      value: value
    })
  }

  render() {
    return (
      <View className="home-wrapper">
        <AtSearchBar
          className="search"
          value={this.state.value}
          onChange={this.onChange.bind(this)}
        />
      </View>
    )
  }
}
