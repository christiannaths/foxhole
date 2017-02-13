import React from 'react'
import styles from './style'
import { StyleSheet, View, TouchableHighlight, TouchableOpacity, Modal, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TimerDisplay from './display'
import Icon from 'react-native-vector-icons/Ionicons'
import BackgroundTimer from 'react-native-background-timer'
import Text from '@base/text'
import Toolbar from '@components/toolbar'
import Button from '@components/toolbar/button'
import { setTimer, resetTimer, stopTimer, startTimer, setTimerPid } from '@store/actions'

const mapStateToProps = (state) => ({
  time: state.timer.value,
  running: state.timer.isRunning,
  pid: state.timer.pid
})

class Timer extends React.Component {
  constructor (props) {
    super(props)

    this.handleStartStop = this.handleStartStop.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleStart () {
    const { time, dispatch } = this.props
    const now = Date.now()

    dispatch(startTimer())

    const pid = BackgroundTimer.setInterval(() => {
      const newTime = Date.now() - now + time
      dispatch(setTimer(newTime))
    }, 100)

    dispatch(setTimerPid(pid))
  }

  handleStop () {
    const { pid, dispatch } = this.props

    BackgroundTimer.clearInterval(pid)
    dispatch(setTimerPid(null))
    dispatch(stopTimer())
  }

  handleStartStop () {
    const { running } = this.props

    if (running) {
      this.handleStop()
    } else {
      this.handleStart()
    }
  }

  handleReset () {
    const { running, pid, dispatch } = this.props

    if (running) return

    dispatch(resetTimer())
  }

  render () {
    const { visible, onDismiss, time, running } = this.props
    const primaryButtonStyles = !running ? styles.startButton : styles.stopButton
    const primaryButtonTextStyles = !running ? styles.startButtonText : styles.stopButtonText
    const primaryButtonText = !running ? 'Start' : 'Stop'
    if (!visible) return null

    return (
      <View>
        <Modal animationType={'slide'} transparent={false} visible={!!visible} onRequestClose={() => null}>
          <View style={styles.layout}>
            <View style={styles.header}>
              <TouchableOpacity style={styles.closeButton} onPress={onDismiss}>
                <Icon name='ios-close' color='#ccc' size={64} />
              </TouchableOpacity>
            </View>
            <TimerDisplay />
            <View style={styles.footer}>
              <TouchableOpacity
                style={[styles.button, {borderColor: !running ? '#666' : '#ccc'}]}
                onPress={this.handleReset}
                activeOpacity={!running ? 0.2 : 1}
              >
                <Text style={{ color: !running ? '#666' : '#ccc' }}>Reset</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, primaryButtonStyles]} onPress={this.handleStartStop}>
                <Text style={primaryButtonTextStyles}>{primaryButtonText}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

}

Timer.defaultProps = {}
Timer.contextTypes = {
  store: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Timer)
