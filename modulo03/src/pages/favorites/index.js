import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Favorites = () => (
  <View style={styles.container} />
);

Favorites.navigationOptions = {
  title: 'Meus Favoritos',
};
export default Favorites;
