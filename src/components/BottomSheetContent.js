import React from "react";
import PropTypes from "prop-types";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import theme from "../../assets/themes/index";
import { TVEventHandler } from "react-native-web";

const BottomSheetContent = ({ handelClose }) => {
  return (
    <View style={styles.contentWrapper}>
      <TouchableOpacity
        style={styles.buttonLarge}
        onPress={() => alert("create new album")}
      >
        <Text style={styles.buttonTitle}>Create new album</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSmall}
        onPress={handelClose}
      >
        <Text style={styles.buttonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

BottomSheetContent.propTypes = {};
const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.m,
    height: 250 /* DEVE ESSERE L' ALTEZZA MASISMA DEL BUTTONSHEET snapHeight */,
  },
  buttonLarge: {
    marginTop: theme.spacing.ms,
    marginHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.l,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    alignItems: "center",
    shadowColor: theme.colors.black,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  buttonSmall: {
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    alignItems: "center",
    shadowColor: theme.colors.black,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  buttonTitle: {
    ...theme.textVariants.h2,
  },
});

export default BottomSheetContent;
