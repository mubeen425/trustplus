import { StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { colors } from 'theme/colors'
import { Text, View } from 'native-base'
import { heightRatio, widthRatio } from 'utils/functions/pixelRatio'
import EngJson from 'i18n/english.json';
import { textRatio } from 'utils/functions/textRatio'
import PinDots from 'components/atoms/pinDots'
import PinNumbers from 'components/atoms/pinNumbers'
type Props = {}

const PinScreen = (props: Props) => {
  const [value, setValue] = useState('12345');
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>{EngJson.pages.pin.create_pass}</Text>
        <PinDots value={value} />
        <View style={styles.hr} />
        <PinNumbers />
        <Text style={styles.bottomText}>{EngJson.pages.pin.textbottom}</Text>
      </View>
    </View>
  );
}

export default PinScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  innerContainer: {
    position: 'absolute',
    bottom: heightRatio(4),
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: textRatio(18),
    marginBottom: heightRatio(2.2),
  },
  hr: {
    borderBottomWidth: 0.9,
    borderColor: colors.primary,
    width: widthRatio(60),
    marginTop: heightRatio(4),
    marginBottom: heightRatio(4),
  },
  bottomText: {
    paddingHorizontal: widthRatio(20),
    textAlign: 'center',
    marginTop: widthRatio(4),
    fontWeight: '500',
    fontSize: textRatio(14),
    lineHeight: textRatio(18)
  }
});