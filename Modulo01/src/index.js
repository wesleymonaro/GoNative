import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Todo from './components/Todo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    flexDirection: 'column',
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
      { rotateZ: '20deg' },
    ],
  },
});


export default class App extends Component {
  state = {
    todos: [
      { id: 0, text: 'Fazer café' },
      { id: 1, text: 'Estudar o GoNative' },
    ],
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: 'Novo Todo' }],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Todo title="Fazer café" />
        <Todo title="Estudar o GoNative" />
      </View>
    );
  }
}
