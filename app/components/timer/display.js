import styles from './style'
import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import displayTime from 'minutes-seconds-milliseconds'

const mapStateToProps = (state) => ({
  time: state.timer.value
})

const format = (ms) => {
  let x = ms / 1000
  const sec = Math.floor(x % 60).toString()

  x /= 60

  const min = Math.floor(x % 60).toString()

  const fmtSec = ('00' + sec).substring(sec.length)
  const fmtMin = ('00' + min).substring(min.length)

  return `${fmtMin}:${fmtSec}`
}

const TimerDisplay = ({time}) => (
  <View style={styles.timerDisplay}>
    <Text style={styles.time}>{format(time)}</Text>
  </View>
)

TimerDisplay.propTypes = {}
TimerDisplay.defaultProps = {}

export default connect(mapStateToProps)(TimerDisplay)
