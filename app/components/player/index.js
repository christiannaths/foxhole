import React from 'react'
import styles from './style'
import { StyleSheet, View, TouchableHighlight } from 'react-native'
import Text from '@base/text'

const Player = ({player, onPress}) => (
  <TouchableHighlight
    underlayColor={ '#dddddd'}
    style={[styles.default, styles[player.team]]}
    onPress={ () => onPress(player.id) }
  >
    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
      <View style={styles.nameColumn}>
        <Text style={styles[`${player.team}Text`]}>
          <Text style={styles.text}>{player.name}</Text>
        </Text>
      </View>
      <View style={styles.statsColumn}>
        <Text style={styles[`${player.team}Text`]}>
          <Text style={[styles.text, styles.statsText]}>GP: {player.gp}</Text>
        </Text>
      </View>
    </View>
  </TouchableHighlight>
)

Player.defaultProps = {
  player: {
    gp: 0,
    name: 'New Player',
    team: 'default',
    timestamp: 0
  }
}

export default Player
