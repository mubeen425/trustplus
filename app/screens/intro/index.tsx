import {StyleSheet, View} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Center, Image, Text} from 'native-base';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';
import {images} from 'assets/images';
import EngJson from 'i18n/english.json';
import {textRatio} from 'utils/functions/textRatio';
import AppButton from 'components/base/button';

type Props = {};

const slides = [
  {
    key: 1,
    image: images.intro[1],
    heading: EngJson.pages.intro.one.heading,
    subHeading: EngJson.pages.intro.one.subHeading,
    imageSize: 22,
    top: 5,
  },
  {
    key: 2,
    image: images.intro[2],
    heading: EngJson.pages.intro.two.heading,
    subHeading: EngJson.pages.intro.two.subHeading,
    imageSize: 25,
    top: 2,
  },
  {
    key: 3,
    image: images.intro[3],
    heading: EngJson.pages.intro.three.heading,
    subHeading: EngJson.pages.intro.three.subHeading,
    imageSize: 25,
    top: 4,
  },
  {
    key: 4,
    image: images.intro[4],
    heading: EngJson.pages.intro.four.heading,
    subHeading: EngJson.pages.intro.four.subHeading,
    imageSize: 34,
    top: 0,
  },
];

const IntroScreen = (props: Props) => {
  const _renderItem = ({item}: any) => {
    return (
      <Center style={styles.slideItemContainer}>
        <Image
          alt="image"
          resizeMode="contain"
          source={item.image}
          height={heightRatio(item.imageSize)}
        />
        <Text style={[styles.heading, {marginTop: heightRatio(item.top)}]}>
          {item.heading}
        </Text>
        <Text style={styles.subHeading}>{item.subHeading}</Text>
      </Center>
    );
  };
  return (
    <View style={styles.container}>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={() => {}}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        showSkipButton={false}
        showPrevButton={false}
        showNextButton={false}
        showDoneButton={false}
      />
      <AppButton title={EngJson.text.new_wallet} />
      <AppButton
        backgroundColor={colors.white}
        marginTop={1}
        marginBottom={4}
        title={EngJson.text.already_have_a_wallet}
        textColor={colors.primary}
      />
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  itemContainer: {
    flex: 1,
  },
  slideItemContainer: {
    flex: 1,
  },
  dotStyle: {
    marginBottom: heightRatio(3),
    zIndex: 1000,
    width: widthRatio(2),
    height: widthRatio(2),
    marginRight: widthRatio(1.2),
    backgroundColor: colors.gray.light,
  },
  activeDotStyle: {
    marginBottom: heightRatio(3),
    zIndex: 1000,
    width: widthRatio(2),
    height: widthRatio(2),
    marginRight: widthRatio(1.2),
    backgroundColor: colors.primary,
  },
  heading: {
    fontSize: textRatio(30),
    paddingTop: heightRatio(2),
  },
  subHeading: {
    fontSize: textRatio(17),
    paddingTop: heightRatio(1.5),
    color: colors.gray.grayText,
    textAlign: 'center',
  },
});
