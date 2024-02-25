import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Layout from './src/components/Layout';
import SearchBar from './src/components/SearchBar';
import Block from './src/components/Block';

export default function App() { 

  const images = [
    'https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://images.unsplash.com/photo-1512654448383-47b2fe224e44?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1600359756098-8bc52195bbf4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ]

  function drawImages() {
    return images.map((image, i) => <Block key={i} image={image} />)
  }

  return (
    <Layout title="Content">
      <View style={styles.container}>
        <SearchBar />
        <ScrollView  showsVerticalScrollIndicator={false}>
          {drawImages()}
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  }

});
