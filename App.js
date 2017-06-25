import React from 'react';
import { StyleSheet, Text, View, TouchableHightlight } from 'react-native';



export default class App extends React.Component {

  state = {
    count: 0
  }
  //function syntax
  increasebyOne = () => {
    console.log('pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHightlight
          onPress={this.increaseByOne}
          style={styles.button}
        >
        <Text>Submit</Text>
        </TouchableHightlight>
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
