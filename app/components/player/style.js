import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  default: {
    borderRadius: 0,
    backgroundColor: '#edf0f3',
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 300,
    marginBottom: StyleSheet.hairlineWidth,
    alignItems: 'center',
    flexDirection: 'row',
    borderLeftColor: '#aaaeb3',
    borderLeftWidth: 6,
    borderStyle: 'solid',
  },
  team1: {
    backgroundColor: 'white',
    borderLeftColor: '#4990E2',
    borderLeftWidth: 6,
    borderStyle: 'solid',
  },
  team2: {
    backgroundColor: 'white',
    borderLeftColor: '#D0011B',
    borderLeftWidth: 6,
    borderStyle: 'solid',
  },
  text: {
    color: '#28323C',
    textAlign: 'center',
    flex: 1
  },
  statsText: {
    fontSize: 12
  },
  nameColumn: {
    flex: 1
  },
  statsColumn: {
    flex: 1,
    alignItems: 'flex-end'
  }

})
