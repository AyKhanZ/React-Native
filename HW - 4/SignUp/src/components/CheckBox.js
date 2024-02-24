import React, { useState } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  function toggleBtn() {
    setIsChecked(!isChecked);
  }

  return (
    <Pressable
      style={isChecked ? styles.fullFilled : styles.empty}
      onPress={toggleBtn}
    >
      <Text>
        {isChecked ? <Icon name="check" size={15} color="grey" /> : ""}
      </Text>
    </Pressable>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  fullFilled: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 5,
    width: 24,
    height: 24,
    marginRight: 10
  },
  empty: {
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    backgroundColor: "#fffff",
    borderColor: "grey",
    borderRadius: 5,
    width: 24,
    height: 24,
  },
});
