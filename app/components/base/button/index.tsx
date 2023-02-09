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
  onClick: any;
  isDisabled?: boolean;
};

const AppButton = (props: Props) => {
  const {
    title = 'AppButton',
    marginTop = 0,
    backgroundColor = colors.primary,
    textColor = colors.white,
    marginBottom = 0,
    onClick,
    isDisabled= false
  } = props;
  const disabledStyle = isDisabled ? {backgroundColor: colors.gray.dark2} : {};
  return (
    <TouchableOpacity
      onPress={onClick}
      disabled={isDisabled}
      style={[
        styles.container,
        {
          marginTop: heightRatio(marginTop),
          backgroundColor,
          marginBottom: heightRatio(marginBottom),
          ...disabledStyle,
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
