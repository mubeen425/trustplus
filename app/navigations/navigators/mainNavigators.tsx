import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from 'navigations/screens.constants';
import LoaderScreen from 'screens/loader';
import IntroScreen from 'screens/intro';

type Props = {}

const Stack = createNativeStackNavigator();

const MainNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName={screens.LOADER}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={screens.LOADER} component={LoaderScreen} />
      <Stack.Screen name={screens.INTRO} component={IntroScreen} />
    </Stack.Navigator>
  );
}

export default MainNavigator

const styles = StyleSheet.create({})