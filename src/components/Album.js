import React from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import theme from "../../assets/themes/index.js";
import albumPage from "../../assets/data/albumPage";
import Cards from "./Cards.js";
import Separator from "./Separator.js";

const Album = (props) => {
  return (
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => (
            <View key={index}>
              <Cards item={item} navigation={props.navigation} />
              {index === 1 && <Separator />}
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

Album.propTypes = {
  // controlla i tipi
  navigation: PropTypes.any,
};

const styles = StyleSheet.create({
  albumContainer: {
    marginBottom: theme.spacing.l,
  },
});

export default Album;
