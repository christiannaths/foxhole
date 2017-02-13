import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    flex: 1
  },
  timerDisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    flex: 1
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  time: {
    fontSize: 64
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 100
  },
  closeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    alignItems: 'flex-end'
  },
  startButton: {
    backgroundColor: '#02b875',
    borderColor: '#02b875'
  },
  startButtonText: {
    color: 'white'
  },
  stopButton: {
    backgroundColor: '#c12127',
    borderColor: '#c12127'
  },
  stopButtonText: {
    color: 'white'
  }
})
