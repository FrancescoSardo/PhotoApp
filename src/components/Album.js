import React, { useLayoutEffect, useRef } from "react";
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
import Feather from '@expo/vector-icons/Feather';
import ButtonSheet from 'reanimated-bottom-sheet'
import BottomSheetContent from "./BottomSheetContent.js";

const Album = ({navigation, navigation: { setOptions }}) => {

  const sheetRef = useRef();
  const renderButton = () => <BottomSheetContent handelClose ={closeButtonSheet}/>;
  const closeButtonSheet = () =>{
    sheetRef.current.snapTo(1)
  }
  const CreateButtonSheet = () =>{
    sheetRef.current.snapTo(0)
  }

  /* acces header of navigation*/
  useLayoutEffect(() =>{
    setOptions({
      headerRight: ()=>
        <TouchableOpacity onPress={CreateButtonSheet}>
          <View style={styles.openSheet}>
            <Feather name="plus"  size={16} color={theme.colors.white
            }/>
          </View>
        </TouchableOpacity>
      
    })
  })

  return (
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => (
            <View key={index}>
              <Cards item={item} navigation={navigation} />
              {index === 1 && <Separator />}
            </View>
          ))}
        </View>
      </ScrollView>

      <ButtonSheet 
      ref={sheetRef}
      snapPoints={[250,0]}
      initialSnap={0} /* il punto iniziale ha indice 1 ovvero 250 */
      borderRadius={10}
      renderContent={renderButton}
      />
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
  openSheet:{
    justifyContent: "center",
    alignItems: "center", 
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.m,
    borderRadius: 16
  }
});

export default Album;
