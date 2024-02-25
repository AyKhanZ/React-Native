import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from 'react';

const Search = () => {

  const [searchWord, setSearchWord] = useState('');

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Search' onChangeText={setSearchWord}></TextInput>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({ 
  container: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#E8E8E8",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 15,
    width: 380,
    height: 40,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input: {
    fontSize: 16,
    color: "gray",
  },
});
