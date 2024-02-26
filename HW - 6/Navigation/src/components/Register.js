import React from 'react'
import { Pressable, View, Text, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import InputField from './InputField'
import PasswordInput from './PasswordInput'

const Register = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.large}>Welcome Onboard</Text>
            <Text style={styles.medium}>Let's help you meet up your tasks.</Text>
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.keyboard}>
              <InputField placeholder='Enter your full name' />
              <InputField placeholder='Enter your  email id' />
              <PasswordInput placeholder='Enter Password ' />
              <PasswordInput placeholder='Enter confirm passwordd ' />
            </KeyboardAvoidingView>
            <Pressable
            style={styles.btn}
            onPress={() => navigation.replace('LogIn')}>
              <Text style={styles.whiteFont}>Register</Text>
            </Pressable> 

            <View style={styles.row}>
              <Text>Already have an account ?</Text>
              <Pressable
              style={styles.link}
              onPress={() => navigation.replace('LogIn')}>
                <Text style={styles.link}>Sign in</Text>
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
    keyboard: {
      flex: 1,
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
      marginBottom: 10
    },
    link: {
      color: "#30A6AE",
      width: "90%",
      alignItems: "center",
    },
    whiteFont: {
      color: "white",
      fontSize: 20,
      fontWeight: "500"
    },
    img: {
      width: '80%',
      height: 150
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

export default Register