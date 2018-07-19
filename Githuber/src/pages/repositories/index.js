import React, { Component } from 'react';
import {
  View, AsyncStorage, ActivityIndicator, FlatList, Text,
} from 'react-native';
import api from 'services/api';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

import RepositoryItem from './components/RepositoryItem';

export default class Organizations extends Component {
  static navigationOptions = {
    title: 'Repositórios',
    tabBarIcon: ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />,
  }

  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/repos`);

    this.setState({ data: response.data, loading: false });
  }

  renderListItem = ({ item }) => (
    <RepositoryItem respository={item} />
  );

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
    />
  );

  render() {
    const { loading } = this.state;

    return (
      <View style={styles.container}>

        {
        loading
          ? <ActivityIndicator style={styles.loading} />
          : this.renderList()
      }

      </View>
    );
  }
}
