import React from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import Toolbar from '@components/toolbar'
import TitleBar from '@components/titlebar'
import Title from '@components/titlebar/title'
import Game from '@components/game'
import { defaultPlayers } from '@components/game'
import Button from '@components/toolbar/button'
import { shuffle, rank } from '@utils'
import EditPlayer from '@components/player/edit'

const logPress = () => console.log('press')
const assignTeams = (players, settings) => {
  const total = settings.team_size * settings.team_count
  let teams = []


  if(players.length < total) {
    const half = Math.floor(players.length / 2)
    const shuffledPlayers = shuffle(players)

    teams[0] = []
    teams[1] = shuffledPlayers.slice(half)
    teams[2] = shuffledPlayers.slice(0, half)


  } else {
    const shuffledPlayers = shuffle(players)
    const rankedPlayers = shuffledPlayers.sort( rank )

    teams[0] = rankedPlayers.slice(8)

    teams[1] = []
    teams[1].push( rankedPlayers.slice(0, 1)[0] )
    teams[1].push( rankedPlayers.slice(2, 3)[0] )
    teams[1].push( rankedPlayers.slice(4, 5)[0] )
    teams[1].push( rankedPlayers.slice(6, 7)[0] )

    teams[2] = []
    teams[2].push( rankedPlayers.slice(1, 2)[0] )
    teams[2].push( rankedPlayers.slice(3, 4)[0] )
    teams[2].push( rankedPlayers.slice(5, 6)[0] )
    teams[2].push( rankedPlayers.slice(7, 8)[0] )

    teams[0].map( (player, i) => {
      player.team = `team${ 0 }`
    })

  }

  teams[1].map( (player, i) => {
    player.gp = player.gp + 1
    player.team = `team${ 1 }`
  })

  teams[2].map( (player, i) => {
    player.gp = player.gp + 1
    player.team = `team${ 2 }`
  })

  teams.push(teams.shift())

  const merged = [].concat.apply([], teams)
  return merged
}

class Application extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      players: props.players,
      settings: props.settings,
      editingPlayer: null
    }

    this.handleAddPlayer = this.handleAddPlayer.bind(this)
    this.handleNewGame = this.handleNewGame.bind(this)
    this.handlePlayerPress = this.handlePlayerPress.bind(this)
    this.handleUpdatePlayer = this.handleUpdatePlayer.bind(this)
    this.handleDeletePlayer = this.handleDeletePlayer.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleAddPlayer () {
    players = this.state.players

    players.push({
      id: Date.now(),
      name: 'New Player',
      gp: 0,
      team: 'default',
      timestamp: 0
    })

    players.map( (player) => {
      player.gp = 0
    })

    this.setState({
      players: players
    })
  }

  handleNewGame() {
    const { players, settings} = this.state

    this.setState({
      players: assignTeams(players, settings)
    })
  }

  handlePlayerPress(id){
    const { players } = this.state
    const player = players.find( (player) => player.id === id)
    this.setState({ editingPlayer: player})
  }

  handleUpdatePlayer(newPlayerObj) {
    const { players } = this.state
    const player = players.find( (player) => player.id === newPlayerObj.id)

    player.name = newPlayerObj.name

    this.setState({
      editingPlayer: null
    })
  }

  handleDeletePlayer(removablePlayerObj){
    const { players } = this.state
    newPlayers = players.filter((player) => player.id !== removablePlayerObj.id)


    this.setState({
      players: newPlayers,
      editingPlayer: null
    })
  }

  handleCancel(){
    this.setState({
      editingPlayer: null
    })
  }

  render () {
    const { players, editingPlayer } = this.state

    return (
      <View style={styles.container}>
        <EditPlayer
          player={ editingPlayer }
          onSave={this.handleUpdatePlayer}
          onDelete={this.handleDeletePlayer}
          onCancel={this.handleCancel}
        />
        <TitleBar>

          <Title>TeamShuffle</Title>

        </TitleBar>
        <ScrollView contentContainerStyle={styles.scroller} style={{flex: 1}}>
          <Game players={players} onPlayerPress={this.handlePlayerPress} />
        </ScrollView>
        <Toolbar>

          <Button label='RANDOMIZE TEAMS' primary onPress={this.handleNewGame} highlight='#ff6b54' />
          <Button label='Add Player' onPress={this.handleAddPlayer} />
        </Toolbar>
      </View>
    )
  }
 }

Application.propTypes = {}
Application.defaultProps = {
  settings: {
    team_size: 4,
    team_count: 2
  },
  players: defaultPlayers
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dae0e6',
    paddingTop: 0,
    alignItems: 'stretch'
  },
  scroller: {
    flex: 0,
    paddingVertical: 20,
    paddingHorizontal: 30,
  }
})

export default Application
