import React from 'react'
import { Pressable,SafeAreaView, StyleSheet, Text, ImageBackground } from 'react-native'
import { Image } from 'expo-image'
import getStartedImg from '../../assets/getStarted.png'
import images from './images';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground
      style={{ width: '100%', flex: 1, resizeMode: 'cover' }}
      source={images} 
    >
    <SafeAreaView style={styles.container}>
        <Image style={styles.img} source={getStartedImg} />
        <Text style={styles.large}>Gets things done with to do</Text>
        <Text style={styles.medium}>Lorem ipsum dolor sit amet consectetur. Enim.</Text>
        <Pressable
            style={styles.btn}
            onPress={() => navigation.replace('Register')}
        ><Text style={styles.whiteFont}>Get Started</Text></Pressable> 
    </SafeAreaView>
    </ImageBackground>
    )
}


const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor: '#DEEAE8',
      alignItems: 'center',
      justifyContent: 'space-evenly'
    },
    btn: {
      backgroundColor: "#30A6AE",
      width: "90%",
      alignItems: "center",
      paddingVertical: 20
    },
    whiteFont: {
      color: "white",
      fontSize: 20,
      fontWeight: "500"
    },
    img: {
      marginTop: 80,
      width: '90%',
      marginLeft: '10%',
      height: 250
    },
    medium: {
      fontSize: 18,
      width: "70%",
      fontWeight: "500",
      textAlign: "center"
    },
    large: {
      fontSize: 22,
      width: "70%",
      fontWeight: "700",
      textAlign: "center"
    }
  });

export default GetStarted