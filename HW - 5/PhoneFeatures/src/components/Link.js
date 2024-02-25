import React from 'react';
import { Pressable, View, StyleSheet, Text } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';

export default function Link() {
  return (
    <Pressable onPress={() => Linking.openURL('tel:+994554602734')} style={styles.button}>
      <View>
          <Text styles={styles.whiteFont}>Call</Text>
      </View>
    </Pressable>
  ); 
}

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
    color: "white"
  }
});