import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import theme from "../../assets/themes";
import { borderColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

/* QUESTO DEVE FAR VEDERE LA LISTA DI IMMAGINI ROTONDE */
const Avatar = (props) => {
  const p = props.avatars;

  return (
    <View>
      {p.map((item, index) => (
        <Image
          key={index}
          source={item.image}
          style={[
            styles.avatarStyle,
            {
              zIndex: index,
              marginLeft: index * 20,
            },
            index !== p.length - 1 && { position: "absolute" },
          ]}
        />
      ))}
    </View>
  );
};

Avatar.propTypes = {
  // controlla i tipi
  avatars: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  avatarStyle: {
    resizeMode: "cover",
    width: theme.imageHeight.xs,
    height: theme.imageHeight.xs,
    borderRadius: theme.imageHeight.xs / 2,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
});

export default Avatar;
