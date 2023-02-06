import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { screens } from './screens.constants';
import IntroScreen from 'screens/intro';

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
