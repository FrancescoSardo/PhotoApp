import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

const SharedAlbum = props => {
  /* console.log(props.route.params.album) */
  const album = props.route.params.album;
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SharedAlbum Page</Text>
    </View>
  );
};

SharedAlbum.propTypes = {
  album: PropTypes.any,
};

export default SharedAlbum;
