import React from 'react';
import {View, StyleSheet, Text, useWindowDimensions, Platform, Pressable} from 'react-native';

const Dimentions = () => {
  const {height, width, scale, fontScale} = useWindowDimensions();

  function alertDimentions() {
    alert(`Device's OS: ${Platform.OS} \nDevice's model: ${Platform.Model} \nWindow's width: ${Math.round(width)} \nWindow's height: ${Math.round(height)} `)
  }

  return (
      <Pressable style={styles.button} onPress={alertDimentions}>
        <View>
            <Text styles={styles.whiteFont}>Information about your device</Text>
        </View>
      </Pressable>
  );
};
const styles = StyleSheet.create({
    button: {
      width: "80%",
      alignItems: "center",
      marginVertical: 10,
      backgroundColor: 'lightblue',
      padding: 20,
      borderRadius: 10
    },
    whiteFont: {
      fontSize: 20,
      color: "pink"
    }
  });

export default Dimentions;