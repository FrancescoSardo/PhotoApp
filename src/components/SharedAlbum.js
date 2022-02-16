import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
const SharedAlbum = props => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SharedAlbum Page</Text>
    </View>
  );
};

SharedAlbum.propTypes = {
  
};

export default SharedAlbum;