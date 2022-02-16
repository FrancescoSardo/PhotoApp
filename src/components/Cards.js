import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import PropTypes from "prop-types";
import theme from "../../assets/themes";
import Avatar from "./Avatar";

const Cards = (props) => {
  const p = props.item;
  console.log("-------------------------")
  
  console.log(p.avatars)
  return (
    <ImageBackground source={p.background} style={styles.imagebackground}>
      <Pressable 
      onPress={() => props.navigation.navigate("Shared Album", { album: p })}
      
      >
        <View style={styles.imageContentContainer}>
          <View>
            <Text style={styles.imageTitle}>{p.title}</Text>
            <Text style={styles.imageSubTitle}>{`Created by ${p.user}`}</Text>
          </View>
          {/* Avatar */}
          <View>
            <Avatar avatars={p.avatars} />
          </View>
        </View>
      </Pressable>
    </ImageBackground>
  );
};

Cards.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.any,
};
const styles = StyleSheet.create({
  imagebackground: {
    resizeMode: "cover",
    overflow: "hidden",
    height: theme.imageHeight.s,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: "center"

  },
  imageContentContainer: {
    borderWidth: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  imageTitle: {
  ...theme.textVariants.h1,
  color: theme.colors.white
  },
  imageSubTitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white
  },
});
export default Cards;
