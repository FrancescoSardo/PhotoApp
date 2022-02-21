import PropTypes from "prop-types";
import theme from "../../assets/themes/index";
import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

const SharedAlbumTitleCards = (props) => {
  let p = props.album;
  /* console.log(p); */
  return (
    <ImageBackground source={p.background} style={styles.ImageBackground}>
      <View style={styles.imageContentContainer}>
        <View  >
          <Text style={styles.imageTitle}>{p.title}</Text>
          <Text style={styles.imageSubTtle}>Created by {p.user}</Text>
        </View>
        <View>
          <Text style={styles.imageNumber}>102 foto</Text>
        </View>
      </View>
    </ImageBackground>
  );  
};
const styles = StyleSheet.create({
  ImageBackground: {
    resizeMode: "cover",
    overflow: "hidden",
    height: theme.imageHeight.l,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: "flex-end",
  },
  imageContentContainer:{
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    
  },
  TopImageBackground: {},
  imageTitle:  {
    ...theme.textVariants.h1,
    color: theme.colors.white
  },
  imageSubTtle:{
    ...theme.textVariants.body2,
    color: theme.colors.white,

  },
  imageNumber:{
    ...theme.textVariants.body2,
    color: theme.colors.lightGray,
  },
});
export default SharedAlbumTitleCards;
