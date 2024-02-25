import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './NavBar';

const Layout = ({title, children}) => {
  return (
    <View style={styles.container}>
        <NavBar title={title} />
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