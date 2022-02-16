import React from 'react';
import PropTypes from 'prop-types';
import { View , Text, Pressable} from 'react-native';
const Album = props => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Album Page</Text>
      <Pressable onPress={() => props.navigation.navigate("Shared Album")}>
        <Text>click</Text>
      </Pressable>
    </View>
  );
};

Album.propTypes = {
  
};

export default Album;