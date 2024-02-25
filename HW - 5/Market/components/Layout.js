import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navbar from './Navbar';

const Layout = ({title, children}) => {
  return (
    <View style={styles.container}>
        <Navbar title={title} />
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      },
})

export default Layout