import React from 'react';
import { StyleSheet, Text, View, TouchableHightlight } from 'react-native';
// the ./ means same folder structure level
import Input from './Component/Input/input';


export default class App extends React.Component {
  state = {
    value: ''
  }

//prop is a channel to pass info from an instance to the class

  render() {
    return (
      <View style={styles.container}>
        <Input
          value={this.state.value}
          onChange={(value)=>this.setState({value: value})}
        >
        </Input>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>fuck</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 20
  }
});
