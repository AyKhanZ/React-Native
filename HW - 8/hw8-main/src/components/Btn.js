import React from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';

const Btn = ({onPress, btnText}) => {
  return (
    <View>
        <Pressable onPress={() => onPress()}>
            <View style={styles.container}>
                <Text style={styles.heading}>{btnText}</Text>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#5DB075",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 20,
    },
    heading: {
        fontSize: 20,
        color: "white"
    }
  });

export default Btn