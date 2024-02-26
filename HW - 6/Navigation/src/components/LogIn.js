import React from 'react'
import { Pressable, View, Text, SafeAreaView, StyleSheet, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native'
import InputField from './InputField'
import PasswordInput from './PasswordInput'
import { Image } from 'expo-image'
import logIn from '../../assets/logIn.png'
import bg from '../../assets/bg.png'

const LogIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.large}>Welcome back !</Text>

      <Image style={styles.img} source={logIn} />

      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboard}>
        <InputField placeholder='Enter your  email' />
        <PasswordInput placeholder='Enter Password ' />
      </KeyboardAvoidingView>

      <Pressable
        style={styles.linkCenter}>
          <Text style={styles.linkCenter}>Forget Password</Text>
      </Pressable> 

      <Pressable
      style={styles.btn}
      onPress={() => navigation.replace('LogIn')}>
        <Text style={styles.whiteFont}>Log in</Text>
      </Pressable> 

      <View style={styles.row}>
        <Text>Don't have an account ?</Text>
        <Pressable
        style={styles.link}
        onPress={() => navigation.replace('Register')}>
          <Text style={styles.link}>Sign up</Text>
        </Pressable> 
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#DEEAE8',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  keyboard: {flex: 1,
  width: '100%',
  backgroundColor: '#DEEAE8',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  },
  row: {
    flexDirection: "row",
    width: '80%',
    marginLeft: '10%'
  },
  btn: {
    backgroundColor: "#30A6AE",
    width: "90%",
    alignItems: "center",
    paddingVertical: 20,
    marginVertical: 10
  },
  link: {
    color: "#30A6AE",
    width: "90%",
    alignItems: "center"
  },
  linkCenter: {
    color: "#30A6AE",
    width: "90%",
    alignItems: "center",
    justifyContent: 'center',
    textAlign: 'center'
  },
  whiteFont: {
    color: "white",
    fontSize: 20,
    fontWeight: "500"
  },
  img: {
    width: '80%',
    height: 200,
    marginTop: 50
  },
  medium: {
    fontSize: 18,
    width: "70%",
    fontWeight: "500",
    textAlign: "center"
  },
  large: {
    marginTop: 80,
    fontSize: 22,
    width: "70%",
    fontWeight: "700",
    textAlign: "center"
  }
  });

export default LogIn