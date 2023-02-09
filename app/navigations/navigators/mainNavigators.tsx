import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from 'navigations/screens.constants';
import LoaderScreen from 'screens/loader';
import IntroScreen from 'screens/intro';
import LegalScreen from 'screens/legal';
import PinScreen from 'screens/pin';

type Props = {}

const Stack = createNativeStackNavigator();

const MainNavigator = (props: Props) => {
  return (
    <Stack.Navigator
      initialRouteName={screens.LOADER}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name={screens.LOADER} component={LoaderScreen} />
        <Stack.Screen name={screens.INTRO} component={IntroScreen} />
        <Stack.Screen name={screens.LEGAL} component={LegalScreen} />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen name={screens.PIN} component={PinScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default MainNavigator

const styles = StyleSheet.create({})