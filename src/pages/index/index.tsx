import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.styl'

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    console.log('show')
  }

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world12w!</Text>
      </View>
    )
  }
}
