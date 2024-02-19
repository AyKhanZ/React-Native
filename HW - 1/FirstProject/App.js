import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CheckBox from "./src/components/CheckBox";
import Input from "./src/components/Input";
import Categories from "./src/components/Categories";
import InputIcons from "./src/components/InputIcons";
import TodoItem from "./src/components/TodoItem";

export default function App() {
  return (
    <View style={styles.container}>
      <CheckBox />
      <Input />
      <Categories />
      <InputIcons />
      <TodoItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },
});
