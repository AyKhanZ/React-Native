import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import List from "./components/List";
import Trending from "./components/Trending";
import HotDeals from "./components/HotDeals";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Navbar />
        <Search />
        <StatusBar style="auto" />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.sector}>
          <Text style={styles.title}>Hot deals</Text>
          <HotDeals />
        </View>
        <View style={styles.sector}>
          <Text style={styles.title}>Trending</Text>
          <Trending />
        </View>
        <View style={styles.sector}>
          <Text style={styles.title}>Deals</Text>
          <HotDeals />
        </View>
        <View style={styles.sector}>
          <Text style={styles.title}>Deals</Text>
          <Trending />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pages />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
  },
  sector: {
    margin: 10,
  },
  header: {
    marginBottom: 20,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flex: 1,
  },
});
