import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from 'theme/colors'

type Props = {}

const PinScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>PinScreen</Text>
    </View>
  )
}

export default PinScreen

const styles = StyleSheet.create({
  container: {
          flex: 1,
          backgroundColor: colors.white
  }
});