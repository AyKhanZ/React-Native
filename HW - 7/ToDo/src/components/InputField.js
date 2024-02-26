import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from 'react';

const InputField = ({placeholder, setSmth}) => {

  return ( 
    <View style={placeholder=='Date' || placeholder=='Time' ? styles.smallContainer : styles.container}>
        <TextInput style={styles.heading} placeholder={placeholder} onChangeText={setSmth}></TextInput>
    </View>
  ) 
  
};
 
export default InputField;

const styles = StyleSheet.create({
  container: {
      width: "90%",
      backgroundColor: "#F6F6F6",
      borderWidth: 1,
      borderColor: "lightgrey",
      height: 40,
      justifyContent: "center",
      paddingHorizontal: 10,
      borderRadius: 5,
      marginVertical: 20,
  },
  smallContainer: {
    width: "44%",
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "lightgrey",
    height: 40,
    justifyContent: "center",
    paddingHorizontal: 10,
    borderRadius: 5,
    marginVertical: 20,
},
  heading: {
      fontSize: 20,
      color: "gray"
  }
})
