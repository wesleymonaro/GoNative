import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Todo from './components/Todo'


export default class App extends Component {

  // CICLO DE VIDA
  // Primeiro método chamado na tela, logo que é criada
  componentDidMount() { }


  // Executado antes do componentDidMount e antes de cada atualização
  // Apenas se tiver alguma variável no state que dependa de algum valor das props
  static getDerivedStateFromProps(nextProps, prevState){
    return {text: nextProps.text} //passando o text das props para o state
  }

  //executado a cada atualização, e decide se o componente deve atualizar ou não
  // retorna boolean
  shouldComponentUpdate(nextProps, nextState){
    return nextState.counter < 5
  }

  //executado depois de executar o render
  componentDidUpdate(prevProps, prevState){ }


  //antes do componente ser desmontado
  componentWillUnmount(){ }

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
