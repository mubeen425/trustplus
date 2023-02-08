import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text, View} from 'native-base';
import {colors} from 'theme/colors';
import {heightRatio, widthRatio} from 'utils/functions/pixelRatio';

type Props = {
  title: string;
  marginTop?: number;
  backgroundColor?: string;
  textColor?: string;
  marginBottom?: number;
  onClick: any
};

const AppButton = (props: Props) => {
  const {
    title = 'AppButton',
    marginTop = 0,
    backgroundColor = colors.primary,
    textColor = colors.white,
    marginBottom = 0,
    onClick
  } = props;
  return (
    <TouchableOpacity
      onPress={onClick}
      style={[
        styles.container,
        {
          marginTop: heightRatio(marginTop),
          backgroundColor,
          marginBottom: heightRatio(marginBottom),
        },
      ]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: widthRatio(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthRatio(1),
  },
  text: {
    color: colors.white,
    alignItems: 'center',
  },
});
