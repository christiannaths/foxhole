import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import codePush from 'react-native-code-push'

import App from './app'

const codePushOpts = { installMode: codePush.InstallMode.ON_NEXT_RESUME, minimumBackgroundDuration: 60 * 10 }

export default class Foxhole extends Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('foxhole', () => codePush(codePushOpts)(Foxhole))
