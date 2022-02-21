import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import theme from "../../assets/themes";

const ListImage = (props) => {
  const p = props.image;

  return <Image source={p.background} style={styles.galleryImage} />;
};

const ImageGallery = (props) => {
  let p = props.images;

  return (
    <View style={styles.galleryContainer}>
      <Text style={styles.galleryText}>Photos</Text>
      {/* List */}
      <FlatList
        data={p}
        /* keyExtractor={item => item.id} */
        numColumns={3}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => <ListImage image={item} />}
      />
    </View>
  );
};

ImageGallery.propTypes = {};
const styles = StyleSheet.create({
  galleryContainer: {
    alignItems: "center",
    marginBottom: theme.spacing.l,
  },
  galleryText: {
    ...theme.textVariants.body3,
    color: theme.colors.gray,
  },
  galleryImage: {
    height: theme.imageHeight.m,
    width: theme.imageHeight.m,
    margin: 2,
    borderWidth: 0,
    borderRadius: 10
  },
});
export default ImageGallery;
