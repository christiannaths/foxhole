import React from 'react'
import styles from './style'
import { View } from 'react-native'

const Toolbar = ({children}) => (
  <View style={styles.root} children={children} />
 )

export default Toolbar
