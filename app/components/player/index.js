import React from 'react'
import styles from './style'
import { StyleSheet, View } from 'react-native'
import Text from '@base/text'

const Player = ({player}) => (
  <View key={player.id} style={[styles.default, styles[player.group]]}>
    <View style={styles.nameColumn}>
      <Text style={styles[`${player.group}Text`]}>
        <Text style={styles.text}>{player.name}</Text>
      </Text>
    </View>
    <View style={styles.statsColumn}>
      <Text style={styles[`${player.group}Text`]}>
        <Text style={[styles.text, styles.statsText]}>GP: {player.gp}</Text>
      </Text>
    </View>
  </View>
)

Player.defaultProps = {
  player: {
    gp: 0,
    name: 'New Player'
  },
  group: 'default'
}

export default Player
