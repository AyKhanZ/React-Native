import React from 'react';
import { StyleSheet, View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

const SearchBar = () => {

  const [searchWord, setSearchWord] = useState('');

  return ( 
    <View style={styles.container}>
        <TextInput style={styles.heading} placeholder='Search' onChangeText={setSearchWord}></TextInput>
    </View>
  
  ) 
} 

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#F6F6F6",
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

export default SearchBar;