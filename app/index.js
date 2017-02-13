import React from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import { Provider } from 'react-redux'
import store from '@store'
import App from '@components/app'

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

Application.propTypes = {}
Application.defaultProps = {}

export default Application
