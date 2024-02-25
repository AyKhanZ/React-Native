import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dimentions from './src/components/Dimentions';
import Link from './src/components/Link';

export default function App() {
  return (
    <View style={styles.container}>
      <Dimentions />
      <Link />
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
  },
});
