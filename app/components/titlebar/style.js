import { Platform, StyleSheet } from 'react-native'

export default StyleSheet.create({
  root: {
    flex: 0,
    backgroundColor: '#c5415d'
  },
  gradient: {
    flex: 1,
    height: 60,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',

    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  },
  button: {
    padding: 16
  }
})
