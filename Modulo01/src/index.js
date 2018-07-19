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
      <Text>{this.state.usuario}</Text>
        {
          this.state.todos.map((todo) => (
            <Todo key={todo.id} title={todo.text} />
          ))
        }
        <Button title="Adicionar Todo" onPress={this.addTodo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});
