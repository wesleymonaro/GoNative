import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Todo from './components/Todo'


export default class App extends Component {

  state ={
    usuario: 'Wesley',
    todos: [
      { id: 0, text: 'Fazer café'},
      { id: 1, text: 'Estudar o GoNative'},
    ]
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, {id: Math.random(), text: 'Novo Todo'}]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
  },
  box: {
    width: 80,
    height: 80,
    backgroundColor: '#F00',
    margin: 10,
    transform: [
      { rotateZ: '20deg'}
    ]
  }
});
