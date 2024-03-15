import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Search from "../components/Search";
import Pages from "../components/Pages";
import Trending from "../components/Trending";
import HotDeals from "../components/HotDeals";
import Layout from "../components/Layout";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/NavBar";

export default function Market() {
  return (
    <Layout title="Market">
    <View style={styles.container}>
      <Navbar left='Back' center='Market'  right='Filter' />
      <SearchBar left='Back' center='Content'  right='Filter' />

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
      <StatusBar style="auto" />
    </View>
    </Layout>
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
