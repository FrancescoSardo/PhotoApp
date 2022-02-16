import React from 'react';
import { View , Text} from 'react-native';
import SharedAlbum from '../components/SharedAlbum';
import Album from '../components/Album';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen  name="Album" component={Album} />
      <Stack.Screen  name="Shared Album" component={SharedAlbum} />
    </Stack.Navigator>
  );
};

export default Navigator;