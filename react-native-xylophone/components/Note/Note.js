import * as React from 'react';
import { Text, View, Image, Alert, TouchableOpacity} from 'react-native';
import { styles } from './styles'
import { Constants, Audio } from 'expo'

const touchNote = name => {
  Alert.alert(`You touched the ${name} note`)
}

const handlePlaySoundAsync = async (note) => {
  await Audio.setIsEnabledAsync(true);
  let sound = new Audio.Sound();

  await sound.loadAsync({
    uri: `https://raw.githubusercontent.com/NestorPlasencia/sound/master/${note}.mp3`
  })

  await sound.playAsync();
}

const Note = props => {
  const { backgroundColor, width, name } = props
  return(
    <TouchableOpacity 
      style={[styles.note, { width, backgroundColor } ]}
      onPress={ () => handlePlaySoundAsync(name) }
    >
      <Text style={styles.noteName}>{name}</Text>
    </TouchableOpacity>
  )
}


export default Note