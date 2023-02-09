import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {widthRatio} from 'utils/functions/pixelRatio';
import {colors} from 'theme/colors';

type Props = {
  value: string;
};

const PinDots = (props: Props) => {
  const {value = ''} = props;
  return (
    <View style={styles.container}>
      {Array.from(Array(6), (_, x) =>
        x < value.length ? (
          <View
            key={_}
            style={[styles.dot, {backgroundColor: colors.primary}]}
          />
        ) : (
          <View key={_} style={styles.dot} />
        ),
      )}
    </View>
  );
};

export default PinDots;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dot: {
    width: widthRatio(3),
    height: widthRatio(3),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: widthRatio(1.5),
    marginHorizontal: widthRatio(2),
  },
});
