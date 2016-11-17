import React from 'react'
import styles from './style'
import { Text, View } from 'react-native'
import Player from '@components/player'
import Team from '@components/team'
export settings from './settings'
export defaultTeams from './teams.json'
export defaultPlayers from './players.json'

const Game = ({players, onPlayerPress}) => {

  const output = players.map( (player, i) => {
    return <Player key={i} player={player} onPress={onPlayerPress}/>
  })

  return <View children={output}/>
}

Game.propTypes = {}
Game.defaultProps = {
  players: []
}

export default Game
