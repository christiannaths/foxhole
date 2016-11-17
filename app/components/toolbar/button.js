import React from 'react'
import styles from './style'
import { TouchableHighlight, Text, View } from 'react-native'

const ToolbarButton = ({ label, style, primary, onPress, highlight}) => {
  const buttonStyle = primary ? 'primaryButton' : 'button'
  const buttonTextStyle = primary ? 'primaryButtonText' : 'buttonText'

  return (
    <TouchableHighlight
      underlayColor={ highlight }
      style={styles[buttonStyle]}
      onPress={onPress}
    >
      <Text style={styles[buttonTextStyle]}>{label}</Text>
    </TouchableHighlight>
  )
}

ToolbarButton.defaultProps = {
  label: 'Click Me',
  highlight: '#f1f1f1'
}

export default ToolbarButton
