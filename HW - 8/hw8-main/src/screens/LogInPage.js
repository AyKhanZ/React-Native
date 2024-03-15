import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import LogIn from '../components/LogIn';
import Navbar from "../components/NavBar";

export default function LogInPage({navigation}) {
  return (
      <View style={styles.container}>
        <LogIn navigation={navigation} />
        
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  text: {
    color: "#5DB075",
    textAlign: "center",
    fontSize: 16,
  }
});
