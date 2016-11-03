import React from 'react'
import styles from './style'
import { Text, View } from 'react-native'
import Player from '@components/player'
import Team from '@components/team'
import settings from './settings'

class Game extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      teams: []
    }

    this.mapPlayersToTeams = this.mapPlayersToTeams.bind(this)
    this.renderTeams = this.renderTeams.bind(this)
  }

  mapPlayersToTeams (players) {
    // const { players } = this.props
    const teams = []

    teams.push({}, {}, {})
    teams[0].name = 'Team 1'
    teams[0].players = []
    teams[1].name = 'Team 2'
    teams[1].players = []
    teams[2].name = 'Unselected'
    teams[2].players = []

    players.map((player, i) => {
      player.position = i
      if (i < settings.TEAM_SIZE) {
        player.group = 'group1'
        teams[0].players.push(player)
      } else if (i < (settings.TEAM_SIZE * 2)) {
        player.group = 'group2'
        teams[1].players.push(player)
      } else {
        teams[2].players.push(player)
      }
    })

    console.log(teams)
    this.setState({teams: teams})
  }

  renderTeams (teams) {
    return teams.map((team, i) => {
      return <Team key={'team-' + i} style={styles.listHeader}>
        <Text style={styles.listHeader}>{team.name}</Text>
        { teams[i].players.map((player) => <Player key={player.id} player={player} />)}
      </Team>
    })
  }

  componentDidMount () {
    this.mapPlayersToTeams(this.props.players)
  }

  componentWillReceiveProps (props) {
    this.mapPlayersToTeams(props.players)
  }

  render () {
    const { teams } = this.state
    return (
      <View>
        { this.renderTeams(teams) }
      </View>

    )
  }
 }

Game.propTypes = {}
Game.defaultProps = {}

export default Game
