import React, { Component } from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as AlbumsActions } from 'store/ducks/albums';

import AlbumItem from './components/albumItem';

import styles from './styles';

class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Sua biblioteca',
    headerRight: (
      <TouchableOpacity style={styles.headerRight} onPress={() => navigation.navigate('Search')}>
        <Icon name="search" size={24} color="#FFF" />
      </TouchableOpacity>
    ),
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    getAlbumsRequest: PropTypes.func.isRequired,
    albums: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loading: PropTypes.bool,
    }).isRequired,
  };

  componentDidMount() {
    const { getAlbumsRequest } = this.props;

    getAlbumsRequest();
  }

  render() {
    console.tron.log(this.props);
    const { albums, navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        {albums.loading
          ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
          : (
            <FlatList
              data={albums.data}
              keyExtractor={album => String(album.id)}
              renderItem={({ item }) => (
                <AlbumItem album={item} onPress={() => navigation.navigate('Album', { album: item })} />
              )}
            />
          )}


      </View>
    );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = dispatch => bindActionCreators(AlbumsActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Main);
