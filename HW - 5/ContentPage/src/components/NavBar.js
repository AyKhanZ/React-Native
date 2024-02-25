import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const NavBar = ({title}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.link}>Back</Text>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.link}>Filter</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        marginTop: 30
    },
    link: {
        color: "green",
        fontSize: 16,
        marginHorizontal: 10
    }, 
    heading: {
        fontSize: 20,
        fontWeight: "700"
    }
})

export default NavBar