import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = () => {
  return (
    <View>
      <Text style={styles.title}>Task Title</Text>
      <TextInput style={styles.input} placeholder="Task Title"></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  input: {
    fontSize: 20,
    borderWidth: 4,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
  },
});
