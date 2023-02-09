import {StyleSheet} from 'react-native';
import React from 'react';
import {Text, View} from 'native-base';
import { widthRatio } from 'utils/functions/pixelRatio';
import { colors } from 'theme/colors';
import { textRatio } from 'utils/functions/textRatio';
import Ionicons from 'react-native-vector-icons/Ionicons'

type Props = {
          
};

const PinNumbers = (props: Props) => {
  
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.row1]}>
        <Text style={[styles.singleBtn, {borderRightWidth: 1}]}>1</Text>
        <Text style={[styles.singleBtn, , {borderRightWidth: 1}]}>2</Text>
        <Text style={[styles.singleBtn, , {}]}>3</Text>
      </View>
      <View style={[styles.row, styles.row2]}>
        <Text style={[styles.singleBtn, , {borderRightWidth: 1}]}>4</Text>
        <Text style={[styles.singleBtn, , {borderRightWidth: 1}]}>5</Text>
        <Text style={[styles.singleBtn, {}]}>6</Text>
      </View>
      <View style={[styles.row, styles.row3]}>
        <Text style={[styles.singleBtn, , {borderRightWidth: 1}]}>7</Text>
        <Text style={[styles.singleBtn, , {borderRightWidth: 1}]}>8</Text>
        <Text style={[styles.singleBtn, , {}]}>9</Text>
      </View>
      <View style={[styles.row, styles.row4]}>
        <Text style={[styles.singleBtn, , {borderRightWidth: 1}]}></Text>
        <Text style={[styles.singleBtn, , {borderRightWidth: 1}]}>0</Text>
        <Text style={[styles.singleBtn, , {}]}>
          <Ionicons
            name="backspace-outline"
            color={colors.gray.dark}
            size={widthRatio(7)}
          />
        </Text>
      </View>
    </View>
  );
};

export default PinNumbers;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: widthRatio(80),
  },
  row1: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryGray,
  },
  row2: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryGray,
  },
  row3: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryGray,
  },
  row4: {
    borderBottomColor: colors.primaryGray,
  },
  singleBtn: {
    flexGrow: 1,
    textAlign: 'center',
    paddingHorizontal: widthRatio(7),
    paddingVertical: widthRatio(9),
    borderColor: colors.primaryGray,
    color: colors.gray.dark,
    fontWeight: 'bold',
    fontSize: textRatio(34),
    width: widthRatio(28),
    height: widthRatio(22)
  },
});
