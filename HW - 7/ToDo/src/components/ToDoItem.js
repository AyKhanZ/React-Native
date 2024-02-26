import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import EventIcon from "./icons/EventIcon";
import CheckBoxToDo from "./CheckBoxToDo";

const TodoItem = ({task, date}) => {
  const [isChecked, setIsChecked] = useState(false);

  function toggleBtn() {
    setIsChecked(!isChecked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.circle}><EventIcon /></View>
        <View style={styles.textContainer}>
          <Text style={!isChecked ? styles.textTitle : styles.textTitleChecked}>
            {task}
          </Text>
          <Text style={!isChecked ? styles.textTime : styles.textTimeChecked}>
            {date}
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
    width: "90%",
    height: 80,
    marginVertical: 10
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#E7E2F3",
    alignItems: "center",
    justifyContent: "center"
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
    color: "#1B1B1D",
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
