import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Item from "./Item";

const List = () => {
  const [items, setItems] = useState([
    {
      name: "Item #1 Name Goes Here",
      price: "$19.99",
    },
    {
      name: "Item #1 Name Goes Here",
      price: "$19.99",
    },
    {
      name: "Item #1 Name Goes Here",
      price: "$19.99",
    },
  ]);

  function drawItem(items) {
    return items.map((item, i) => (
      <Item name={item.name} price={item.price} key={i} />
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
