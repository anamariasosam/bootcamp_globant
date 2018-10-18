import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Note from './components/Note/Note'

const notes = [
  {
    name: "A",
    backgroundColor: "#E93F33",
  },
  {
    name: "B",
    backgroundColor: "#ff9100",
  },
  {
    name: "C",
    backgroundColor: "#FCD933",
  },
  {
    name: "C2",
    backgroundColor: "#75E03B",
  },
  {
    name: "D",
    backgroundColor: "#5D9DFA",
  },
  {
    name: "E",
    backgroundColor: "#093FAF",
  },
  {
    name: "F",
    backgroundColor: "#6834A4",
  },
  {
    name: "G",
    backgroundColor: "#EA5E99",
  },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
})

let width = 380

const App = () => {
  return(
    <View style={styles.container}>
      {
        notes.map(note => {
          width -= 35
          return(
            <Note 
              name={note.name}
              backgroundColor={note.backgroundColor} 
              width={width}
            />
          )
        }) 
      }
    </View>
  )
}

export default App