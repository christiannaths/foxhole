import React from 'react'
import styles from './style'
import { Text, View } from 'react-native'

const Team = ({children}) => (
  <View style={styles.base} children={children} />
)

export default Team
