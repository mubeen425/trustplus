import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainContainer from './app/navigation/mainContainer';

export default function App() {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <MainContainer />
      </SafeAreaView>
    </NativeBaseProvider>
  );
}
