import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Category from "./Category";
import CheckBoxToDo from "./CheckBoxToDo";

const TodoItem = () => {
  const [isChecked, setIsChecked] = useState(false);

  function toggleBtn() {
    setIsChecked(!isChecked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Category title={"Event"} />
        <View style={styles.textContainer}>
          <Text style={!isChecked ? styles.textTitle : styles.textTitleChecked}>
            Enter title
          </Text>
          <Text style={!isChecked ? styles.textTime : styles.textTimeChecked}>
            Enter time
          </Text>
        </View>
      </View>
      <CheckBoxToDo isChecked={isChecked} setIsChecked={setIsChecked} />
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    backgroundColor: "white",
    width: 250,
    height: 80,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
  },
  textTime: {
    color: "#1B1B1D",
    fontSize: 14,
  },
  textTitle: {
    fontSize: 18,
  },
  textTimeChecked: {
    color: "rgba(27, 27, 29,0.5)",
    fontSize: 14,
    textDecorationLine: "line-through",
  },
  textTitleChecked: {
    color: "rgba(0, 0, 0,0.5)",
    fontSize: 18,
    textDecorationLine: "line-through",
  },
  textContainer: {
    marginLeft: 10,
  },
});
