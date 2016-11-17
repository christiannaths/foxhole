import React from 'react'
import styles from './style'
import { StyleSheet, View, TouchableHighlight, Modal, TextInput } from 'react-native'
import Text from '@base/text'
import Toolbar from '@components/toolbar'
import Button from '@components/toolbar/button'



class EditPlayer extends React.Component {
  constructor(props){
    super(props)

    this.state = {}

    this.handleNameChange = this.handleNameChange.bind(this)
  }

  handleNameChange(text) {
    this.setState({name: text})
  }

  handleSave(player) {
    player.name = this.state.name
    this.props.onSave(player)
  }

  componentWillReceiveProps(props) {
    if (!props.player ) return
    this.setState({ name: props.player.name})
  }

  render(){

    const { player, onCancel, onSave, onDelete } = this.props
    if (!player) return null

    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={!!player}
          onRequestClose={() => {alert("Modal has been closed.")}}
        >
          <View style={{margin: 44}}>
            <View>
              <Text>{}</Text>
              <TextInput
                style={{height: 40, borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 22}}
                onChangeText={name => this.setState({name})}
                defaultValue={player.name}
                selectTextOnFocus={true}
                autoCapitalize="words"
                autoFocus={true}
              />

              <Toolbar>
                <Button label='Cancel' onPress={onCancel} highlight='#ff6b54' />
                <Button label='Save' primary onPress={ () => this.handleSave(player)} highlight='#ff6b54' />
                <Button label='Delete' onPress={ () => onDelete(player)} />
              </Toolbar>

            </View>
          </View>
        </Modal>
      </View>
    )
  }

}



EditPlayer.defaultProps = {}

export default EditPlayer
