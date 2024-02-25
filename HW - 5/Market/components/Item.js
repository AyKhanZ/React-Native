import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Image } from "expo-image";

const Item = ({ name, price, image }) => {

  function alertInfo() {
    alert(`Name: ${name} \n Price: ${price} \n Info: info`);
  }

  return (
    <>
    <Pressable onPress={alertInfo}>
    <View style={styles.container}>
    <Image
        style={styles.image} 
        source={image}
        contentFit="cover"
        transition={1000}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      </View>
    </Pressable>
    </>
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
