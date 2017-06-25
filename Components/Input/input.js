import React from 'react';
//Css, container, text, something to text in, button emulator
import { StyleSheet, Text, View, TextInput, TouchableHightlight } from 'react-native';

//()=>comething function
//render(){}
export default class Input extends React.Component {
  //return data, i.e result of executing function

  //Instance is one instance/child of class with specific attributes called props(short)/properties
  render (){
    return(
      <View style={styles.container}>
        <TextInput
          keyboardType ={'numeric'}
          value={this.props.value}
          style={styles.input}
          //track changes in text, when someone type something in input field
          //text will be what we type in -
          onChangeText={(text)=>this.props.onChange(text)}
        >
        </TextInput>
      </View>
    )
  }
}


//optimised styling
const styles = StyleSheet.create(){
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    width: 300,
    height: 40,
    borderColor: 'gray'
  }
}
