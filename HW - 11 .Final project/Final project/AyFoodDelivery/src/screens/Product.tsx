import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Dimensions, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageSourcePropType } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import SearchBar from "../components/SearchBar";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "Login">;
  route: undefined;
  img: ImageSourcePropType;
  title: string;
  price: number;
  piece: any;
};

const windowWidth = Dimensions.get("window").width;

export default function Product({ navigation, route }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.whiteContainer}>
        <HeaderTitle title={"Product"} />
        <View style={styles.mainContainer}>
          <SearchBar />
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  whiteContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#F6F5F5",
  },
  mainContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  productContainer: {},
});
