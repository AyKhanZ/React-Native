import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from 'react';

const InputField = ({placeholder}) => {

  const [searchWord, setSearchWord] = useState('');

  return ( 
    <View style={styles.container}>
        <TextInput style={styles.heading} placeholder={placeholder} onChangeText={setSearchWord}></TextInput>
    </View>
  
  ) 
  
};
 
export default InputField;

const styles = StyleSheet.create({
  container: {
      width: "100%",
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
