import React from 'react'
import { Text, StyleSheet } from 'react-native'
import baseStyles from './style'

const CustomText = ({style = {}, children}) => (
  <Text style={baseStyles.root}>
    <Text children={children} style={style} />
  </Text>
)

export default CustomText
