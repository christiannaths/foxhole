import React from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import Toolbar from '@components/toolbar'
import Game from '@components/game'
import defaultPlayers from '@components/game/players.json'
import Button from '@components/toolbar/button'

const defaultTeams = {
  team1: {
    name: 'TEAM 1',
    players: []
  },
  team2: {
    name: 'TEAM 2',
    players: []
  },
  unselected: {
    players: []
  }
}

const logPress = () => console.log('press')

class Hookworm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      players: defaultPlayers,
      teams: defaultTeams
    }

    this.handleAddPlayer = this.handleAddPlayer.bind(this)
  }

  handleAddPlayer () {
    players = this.state.players
    players.push({
      id: Date.now(),
      name: 'New Player',
      gp: 0
    })
    this.setState({
      players: players
    })

    console.log(players)
  }

  render () {
    const {
      players,
      teams
    } = this.state

    return <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroller} style={{flex: 1}}>
        <Game players={players} teams={teams} />
      </ScrollView>
      <Toolbar>
        <Button label='Settings' onPress={logPress} />
        <Button label='NEW GAME' primary onPress={logPress} />
        <Button label='Add Player' onPress={this.handleAddPlayer} />
      </Toolbar>
    </View>
  }
 }

Hookworm.propTypes = {}
Hookworm.defaultProps = {}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#edeff2',
    paddingTop: 60,
    alignItems: 'stretch'
  },
  scroller: {
    flex: 1,
    paddingBottom: 60,
    paddingHorizontal: 30
  }
})

export default Hookworm
