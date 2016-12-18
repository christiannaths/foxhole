import React from 'react'
import styles from './style'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const TitleBar = ({children}) => (
  <View style={styles.root}>
    <LinearGradient
      colors={['#371659', '#D3425B']}
      start={[0.0, 0.0]}
      end={[1.0, 1.0]}
      style={styles.gradient}
      children={children}
    />
  </View>
 )

export default TitleBar
