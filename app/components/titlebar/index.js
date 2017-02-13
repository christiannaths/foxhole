import React from 'react'
import styles from './style'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import Title from './title'
import SpinningView from '@base/spinning-view'

const mapStateToProps = (state) => ({
  timer: {
    isRunning: state.timer.isRunning
  }
})

const TitleBar = ({children, onRightButtonPress, timer}) => (
  <View style={styles.root}>
    <LinearGradient
      colors={['#371659', '#D3425B']}
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 1.0}}
      style={styles.gradient}
    >
      <View style={styles.button}>
        <Icon name='settings' color='transparent' size={18} />
      </View>
      <Title>TeamShuffle</Title>
      <TouchableOpacity style={styles.button} onPress={onRightButtonPress}>
        <SpinningView active={timer.isRunning}>
          <Icon name='clock' color='#ffffff' size={18} />
        </SpinningView>
      </TouchableOpacity>
    </LinearGradient>
  </View>
 )

export default connect(mapStateToProps)(TitleBar)
