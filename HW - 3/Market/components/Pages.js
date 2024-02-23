import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { RadioButton } from "react-native-paper";

const Pages = () => {
  const [checked, setChecked] = useState("first");

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton
          style={checked === "first" ? styles.circleOn : styles.circleOff}
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
          color="#5DB075"
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
          color="#5DB075"
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton
          value="third"
          status={checked === "third" ? "checked" : "unchecked"}
          onPress={() => setChecked("third")}
          color="#5DB075"
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <RadioButton
          value="fourth"
          status={checked === "fourth" ? "checked" : "unchecked"}
          onPress={() => setChecked("fourth")}
          color="#5DB075"
        />
      </View>
    </View>
  );
};

export default Pages;

const styles = StyleSheet.create({
  circleOn: {
    borderRadius: 50,
    backgroundColor: "#5DB075",
    width: 30,
    height: 30,
  },
  circleOff: {
    borderRadius: 50,
    backgroundColor: "#E8E8E8",
    width: 30,
    height: 30,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderColor: "#BDC5CD",
    backgroundColor: "lightgray",
    padding: 5,
    paddingBottom: 10,
  },
});
