import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Image, Spinner, StatusBar} from 'native-base';
import {colors} from 'theme/colors';
import {navigate} from 'navigations/navRef';
import {screens} from 'navigations/screens.constants';
import {images} from 'assets/images';
import {heightRatio} from 'utils/functions/pixelRatio';

type Props = {};

const LoaderScreen = (props: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigate(screens.INTRO);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle="light-content" />
      <Image
        alt="logo"
        source={images.app.logo}
        resizeMode="contain"
        height={heightRatio(30)}
      />
      {/* <Spinner size="lg" color={colors.lightPrimary} /> */}
    </View>
  );
};

export default LoaderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
});
