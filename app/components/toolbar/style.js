import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    flex: 0,
    height: 60,
    padding: 0,
    backgroundColor: '#ececec',
    borderTopColor: '#d7d7d7',
    borderTopWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 12
  },
  primaryButton: {
    flex: 1,
    flexBasis: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#c5415d'
  },
  primaryButtonText: {
    fontSize: 14,
    color: 'white'
  }
})
