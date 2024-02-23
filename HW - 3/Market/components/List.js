import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Item from "./Item";

const List = ({items}) => {

  function drawItem(items) {
    return items.map((item, i) => (
      <Item image={item.image} name={item.name} price={item.price} key={i} />
    ));
  }
  return <View style={styles.container}>{drawItem(items)}</View>;
};

export default List;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 380,
    padding: 5,
  },
});
