import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainNavigator from './navigators/mainNavigators';
import { navigationRef } from './navRef';

const Stack = createNativeStackNavigator();

function MainContainer() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator />
    </NavigationContainer>
  );
}

export default MainContainer;
