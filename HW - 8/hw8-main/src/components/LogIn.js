import React from 'react';
import InputField from './InputField';
import Btn from './Btn';
import CheckBox from './CheckBox';
import PasswordInput from './PasswordInput';
import Navbar from "../components/NavBar";
import { View, StyleSheet, Text, Pressable } from 'react-native';

const LogIn = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Navbar left='Back' center='Log in'  right='Filter' />
        <InputField placeholder="Email" />
        <PasswordInput />
        <Btn onPress={() => navigation.navigate('Tabs')} btnText="Log in" />
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.text}>Forgot your password?</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%"
  },
  gray: {
    color: "grey"
  },
  row: {
    flexDirection: "row"
  },
  text: {
    color: "#5DB075",
    textAlign: "center",
    fontSize: 16
  }
});

export default LogIn