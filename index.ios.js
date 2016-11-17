import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import codePush from 'react-native-code-push'

import App from './app'

const codePushOpts = { installMode: InstallMode.ON_NEXT_RESUME, minimumBackgroundDuration: 60 * 10 }

export default class Foxhole extends Component {
  render () {
    return <App />
  }
}

AppRegistry.registerComponent('foxhole', () => codePush(codePushOpts)(Foxhole))
