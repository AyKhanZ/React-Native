import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Base = () => {
  return (
    <View style={styles.container}>
      <Text>test</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: "violet",
    borderWidth: 4,
    borderColor: "gray",
  },
});

export default Base;
