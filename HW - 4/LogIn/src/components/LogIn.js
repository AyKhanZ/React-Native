import React from 'react';
import InputField from './InputField';
import Btn from './Btn';
import CheckBox from './CheckBox';
import PasswordInput from './PasswordInput';
import { View, StyleSheet, Text } from 'react-native';

const LogIn = () => {
  return (
    <View style={styles.container}>
        <InputField placeholder="Email" />
        <PasswordInput />
        <Btn btnText="Sign Up" />
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
  }
});

export default LogIn