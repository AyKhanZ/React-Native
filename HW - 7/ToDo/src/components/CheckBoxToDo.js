import React, { useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CheckBoxToDo = ({ isChecked, setIsChecked }) => {
  function toggleBtn() {
    setIsChecked(!isChecked);
  }

  return (
    <Pressable
      style={isChecked ? styles.fullFilled : styles.empty}
      onPress={toggleBtn}
    >
      <Text>
        {isChecked ? <Icon name="check" size={15} color="#ffffff" /> : <Text></Text>}
      </Text>
    </Pressable>
  );
};

export default CheckBoxToDo;

const styles = StyleSheet.create({
  fullFilled: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    backgroundColor: "#4A3780",
    borderColor: "#4A3780",
    // borderRadius: 5,
    width: 24,
    height: 24,
  },
  empty: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    backgroundColor: "#ffffff",
    borderColor: "#4A3780",
    // borderRadius: 5,
    width: 24,
    height: 24,
  },
});
