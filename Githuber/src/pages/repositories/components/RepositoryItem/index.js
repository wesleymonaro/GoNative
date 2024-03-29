import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const RepositoryItem = ({ respository }) => (
  <View style={styles.container}>
    <Text style={styles.repoTitle}>
      {respository.full_name}
    </Text>

    <View style={styles.infoContainer}>
      <View style={styles.info}>
        <Icon name="star" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>
          {respository.stargazers_count}
        </Text>
      </View>
      <View style={styles.info}>
        <Icon name="code-fork" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>
          {respository.forks_count}
        </Text>
      </View>
      <View style={styles.info}>
        <Icon name="eye" size={12} style={styles.infoIcon} />
        <Text style={styles.infoText}>
          {respository.watchers_count}
        </Text>
      </View>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
};

export default RepositoryItem;
