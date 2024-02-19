import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBriefcase, faClock } from "@fortawesome/free-solid-svg-icons";

const InputIcon = ({ title }) => {
  function drawIcon(title) {
    if (title == "Time") {
      return <FontAwesomeIcon color="#4A3780" icon={faClock} size={28} />;
    } else if (title == "Luggage") {
      return <FontAwesomeIcon color="#4A3780" icon={faBriefcase} size={28} />;
    }
  }

  return <View>{drawIcon(title)}</View>;
};

export default InputIcon;

const styles = StyleSheet.create({});
