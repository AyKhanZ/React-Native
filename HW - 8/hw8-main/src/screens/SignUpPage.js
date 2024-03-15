import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from '../components/SignUp';

export default function SignUpPage({navigation}) {
  return (
    <View style={styles.container}>
      <SignUp navigation={navigation} />
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
