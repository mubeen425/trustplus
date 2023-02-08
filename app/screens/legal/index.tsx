import { StyleSheet } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'
import { Checkbox, Text, View } from 'native-base'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import { textRatio } from 'utils/functions/textRatio'
import EngJson from 'i18n/english.json';
import CheckboxWithText from 'components/base/checkbox'
import AppButton from 'components/base/button'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {}

const LegalScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{EngJson.pages.legal.legal}</Text>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.topHeading}>{EngJson.pages.legal.heading}</Text>
        <View style={styles.twoButtons}>
          <View style={styles.button1}>
            <Text style={styles.button1Text}>
              {EngJson.pages.legal.privacy_policey}
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={widthRatio(7)}
              color={colors.gray.grayText3}
            />
          </View>
          <View style={styles.hr} />
          <View style={styles.button1}>
            <Text style={styles.button1Text}>
              {EngJson.pages.legal.terms_of_services}
            </Text>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={widthRatio(7)}
              color={colors.gray.grayText3}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottomArea}>
        <CheckboxWithText text={EngJson.pages.legal.accept_services} />
        <AppButton
          title={EngJson.pages.legal.continue}
          onClick={undefined}
          marginTop={2}
          isDisabled={true}
        />
      </View>
    </View>
  );
}

export default LegalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary2,
    height: heightRatio(9),
  },
  headerText: {
    fontSize: textRatio(22),
    color: colors.white,
  },
  
  topContainer: {
    paddingHorizontal: widthRatio(10),
    marginTop: heightRatio(3),
  },
  topHeading: {
    color: colors.gray.grayText2,
    paddingHorizontal: widthRatio(4),
  },
  twoButtons: {
    display: 'flex',
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: widthRatio(3),
    marginTop: heightRatio(2),
  },
  hr: {
          display: 'flex',
          width: '90%',
          borderWidth:0.5,
          borderColor: colors.gray.grayText4,
          marginHorizontal: widthRatio(4)
  },
  button1: {
    padding: widthRatio(3.5),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1Text: {
    fontSize: textRatio(16),
    fontWeight: '400',
    color: colors.gray.grayText3,
  },
  bottomArea: {
          position: 'absolute',
          bottom: heightRatio(3),
          paddingHorizontal: widthRatio(10)
  }
});