import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'
import App from './app'

export default class Foxhole extends Component {
  render () {
    return <App />
  }
}

AppRegistry.registerComponent('foxhole', () => Foxhole)
