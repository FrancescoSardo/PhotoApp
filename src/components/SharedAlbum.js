import React from "react";
import PropTypes from "prop-types";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import SharedAlbumTitleCards from "./SharedAlbumTitleCards";
import Avatar from '../components/Avatar'
import theme from "../../assets/themes";
import ImageGallery from "./ImageGallery";
import backgroundImages from '../../assets/data/backgroundImages';

const SharedAlbum = props => {
  /* console.log(props.route.params.album) */
  const album = props.route.params.album;
  
  return (
    <ScrollView>
      <SharedAlbumTitleCards  album={album} />
      
      <View style={styles.avatarContainer}>
        <Avatar avatars={album.avatars} />
        <Text style={styles.avatarContainerText}>{album.avatars.length} people</Text>
      </View>


    <ImageGallery images={backgroundImages}/>

    </ScrollView>
  );
};
const styles = StyleSheet.create({
  avatarContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: theme.colors.lightGray,
    marginVertical: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    borderWidth : 0,
    borderRadius: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.xs,
    
  },
  avatarContainerText:{
    ...theme.textVariants.body3,
    color: theme.colors.black,
    opacity: 0.4
  }
});

SharedAlbum.propTypes = {
  album: PropTypes.any,
};

export default SharedAlbum;
