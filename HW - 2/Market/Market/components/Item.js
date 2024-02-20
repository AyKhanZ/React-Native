import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Item = ({ name, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}></View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: 170,
    padding: 5,
  },
  image: {
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
    width: 100,
    height: 100,
  },
  name: {
    fontWeight: "300",
    width: 100,
  },
  price: {
    fontWeight: "bold",
  },
});
