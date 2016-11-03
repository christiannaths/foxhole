import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import App from './app'

export default class hookworm extends Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('hookworm', () => hookworm)
