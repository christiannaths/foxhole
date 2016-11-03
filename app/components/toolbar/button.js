import React from 'react'
import styles from './style'
import { TouchableHighlight, Text, View } from 'react-native'

const ToolbarButton = ({ label, style, primary, onPress}) => {
  const buttonStyle = primary ? 'primaryButton' : 'button'
  const buttonTextStyle = primary ? 'primaryButtonText' : 'buttonText'

  return (
    <TouchableHighlight
      underlayColor='rgba(255,255,255,0.5)'
      style={styles[buttonStyle]}
      onPress={onPress}
    >
      <Text style={styles[buttonTextStyle]}>{label}</Text>
    </TouchableHighlight>
  )
}

ToolbarButton.defaultProps = {
  label: 'Click Me'
}

export default ToolbarButton
