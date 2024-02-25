import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Item from "./Item";

const List = ({items}) => {

  function drawItem(items) {
    return items.map((item, i) => (
      <Item image={item.image} name={item.name} price={item.price} key={i} />
    ));
  }
  return <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} contentContainerStyle={styles.container}>{drawItem(items)}</ScrollView>;
};
 
export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
});
