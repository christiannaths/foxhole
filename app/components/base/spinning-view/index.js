import React from 'react'
import { connect } from 'react-redux'
import { Text, View, Animated, Easing } from 'react-native'

const mapStateToProps = (state) => ({
  timer: { isRunning: state.timer.isRunning }
})

class SpinningView extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isSpinning: false
    }

    this.spinValue = new Animated.Value(0)
    this.spin = this.spin.bind(this)
  }

  componentDidMount () {
    this.spin()
  }

  componentDidUpdate () {
    this.spin()
  }

  spin () {
    const { timer } = this.props
    const { isSpinning } = this.state

    if (isSpinning || !timer.isRunning) return

    this.setState({isSpinning: true})
    this.spinValue.setValue(0)

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 4000,
      easing: Easing.linear
    }).start(() => {
      this.setState({isSpinning: false}, () => this.spin())
    })
  }

  render () {
    const { children, timer } = this.props

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <Animated.View
        style={{ transform: [{rotate: spin}] }}
        children={children}
      />
    )
  }
}

export default connect(mapStateToProps)(SpinningView)
