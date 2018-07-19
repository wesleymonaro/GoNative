import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class HeaderRight extends Component {
  signOut = () => {
    console.log('sair');
  }

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Text>
          Sair
        </Text>
      </TouchableOpacity>
    );
  }
}
