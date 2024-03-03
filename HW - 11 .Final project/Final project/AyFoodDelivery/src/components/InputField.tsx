import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";

interface Props {
  email: string;
  setEmail: (password: string) => void;
  placeholder: string;
}

const InputField: React.FC<Props> = ({ placeholder, email, setEmail }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.heading}
        placeholder={placeholder}
        value={email}
        onChangeText={(text) => setEmail(text)}
      ></TextInput>
    </View>
  );
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
    fontSize: 18,
    color: "gray",
  },
});
