import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";

const Navbar = ({left, center, right}) => {

  return (
    <View>
      <View style={styles.container}>
        <Pressable>
          <Text style={styles.back}>{left}</Text>
        </Pressable>
        <Text style={styles.market}>{center}</Text>
        <Pressable>
          <Text style={styles.filter}>{right}</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
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
