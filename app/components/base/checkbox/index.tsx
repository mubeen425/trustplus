import { StyleSheet } from 'react-native'
import React from 'react'
import { Checkbox, Text, View } from 'native-base';
import EngJson from 'i18n/english.json';
import { widthRatio } from 'utils/functions/pixelRatio';
import { colors } from 'theme/colors';

type Props = {
          text?: string
}

const CheckboxWithText = (props: Props) => {
  const {text} = props;
  return (
    <View style={styles.checkboxComp}>
      <Checkbox  value="test" accessibilityLabel="This is a dummy checkbox" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default CheckboxWithText

const styles = StyleSheet.create({
  checkboxComp: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
          marginLeft: widthRatio(3),
          color: colors.primary
  }
});