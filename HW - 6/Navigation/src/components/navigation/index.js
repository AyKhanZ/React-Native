import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../GetStarted';
import Register from '../Register';
import LogIn from '../LogIn';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
      <Stack.Navigator screenOptions={{header: () => {
        return <View></View>
      }}}>
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
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
