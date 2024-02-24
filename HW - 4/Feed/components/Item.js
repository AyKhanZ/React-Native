import React from "react";
import { StyleSheet, Text, View, ImageBackground, Pressable } from "react-native";
import { Image } from "expo-image";

const Item = ({ name, info, image }) => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={image}
        contentFit="cover"
        transition={1000}
      />
      <View style={styles.text}>
        <View style={styles.row}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lightGray}>8m ago</Text>
        </View>
        <Text style={styles.info}>{info}</Text>
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    justifyContent: 'space-between',
    padding: 10,
  },
  img: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  image: {
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  info: {
    fontWeight: "400",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16
  },
  text: {
    width: '80%',
    marginLeft: 10,
    borderWidth: 1,
    borderBottomColor: "lightgray",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent"
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lightGray: {
    color: "lightgray"
  }
});