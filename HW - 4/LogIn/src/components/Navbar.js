import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Navbar = () => {
  return (
    <View>
      <View style={styles.container}>
        
        <Text style={styles.market}>Log In</Text>
        
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: 380,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 30,
  },
  back: {
    fontSize: 18,
    color: "#5DB075",
  },
  filter: {
    fontSize: 18,
    color: "#5DB075",
  },
  market: {
    fontWeight: "bold",
    fontSize: 28,
  },
});
