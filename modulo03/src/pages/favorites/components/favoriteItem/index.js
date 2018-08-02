import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const FavoriteItem = ({ favorite }) => (
  <View style={styles.container}>
    <Text>
      {favorite.full_name}
    </Text>
  </View>
);

export default FavoriteItem;
