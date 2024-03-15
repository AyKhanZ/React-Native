import React from 'react';
import InputField from './InputField';
import Btn from './Btn';
import CheckBox from './CheckBox';
import PasswordInput from './PasswordInput';
import { View, StyleSheet, Text } from 'react-native';
import Navbar from '../components/NavBar';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Navbar left='Back' center='Sign Up'  right='Filter' />
        <InputField placeholder="Name" />
        <InputField placeholder="Email" />
        <PasswordInput />
        <View style={styles.row}>
          <CheckBox />
          <Text style={styles.gray}>I would like to receive your newsletter and other promotional information.</Text>
        </View>
        <Btn onPress={() => navigation.navigate('Login')} btnText="Sign Up" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginTop: 50
  },
  gray: {
    color: "grey"
  },
  row: {
    flexDirection: "row"
  }
});

export default SignUp