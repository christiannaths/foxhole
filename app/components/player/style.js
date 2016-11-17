import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  default: {
    // borderColor: 'black',
    // borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    backgroundColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 300,
    margin: 4,
    alignItems: 'center',
    flexDirection: 'row'
  },
  team1: {
    backgroundColor: '#7ecec9'
  },
  team2: {
    backgroundColor: '#fec675'
  },
  text: {
    color: 'white',
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
