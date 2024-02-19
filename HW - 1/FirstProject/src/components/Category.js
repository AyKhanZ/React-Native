import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCalendarAlt,
  faList,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Category = ({ title }) => {
  function drawIcon(title) {
    if (title == "Event") {
      return (
        <View style={styles.containerEvent}>
          <FontAwesomeIcon color="#4A3780" icon={faCalendarAlt} size={28} />
        </View>
      );
    } else if (title == "Goal") {
      return (
        <View style={styles.containerTrophy}>
          <FontAwesomeIcon color="maroon" icon={faTrophy} size={28} />
        </View>
      );
    } else if (title == "Task") {
      return (
        <View style={styles.containerList}>
          <FontAwesomeIcon color="darkcyan" icon={faList} size={28} />
        </View>
      );
    }
  }
  return <View>{drawIcon(title)}</View>;
};

const styles = StyleSheet.create({
  containerTrophy: {
    backgroundColor: "#FEF5D3",
    borderRadius: "50%",
    padding: 10,
  },
  containerEvent: {
    backgroundColor: "#E7E2F3",
    borderRadius: "50%",
    padding: 10,
  },
  containerList: {
    backgroundColor: "#DBECF6",
    borderRadius: "50%",
    padding: 10,
  },
});

export default Category;
