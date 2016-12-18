import React from 'react'
import styles from './style'
import { View, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Title = ({children}) => (
  <Text style={styles.title} children={children}/>
)

export default Title
