import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IntroScreen from '../screens/intro';
import { screens } from './screens.constants';

const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screens.INTRO} component={IntroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
