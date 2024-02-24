import React from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';
import {Image} from 'expo-image';


const Block = () => {
  return (
    <Image
        style={styles.image}
        source='https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        contentFit="cover"
        transition={1000}
      />
  )
}

export default Block;

const styles = StyleSheet.create({
    image: {
      width: "100%",
      height: 200,
      borderRadius: 10
    },
  });