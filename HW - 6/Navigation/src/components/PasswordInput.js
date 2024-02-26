import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

const PasswordInput = ({placeholder}) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.heading}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable
        onPress={() => setShowPassword(!showPassword)}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
        })}
      >
        <Text style={styles.green}>{showPassword ? 'Hide' : 'Show'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "lightgrey",
        height: 40,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        borderRadius: 5,
        marginVertical: 20,
    },
    heading: {
        fontSize: 20,
        color: "gray"
    },
    green: {
        color: "#5DB075"
    }
  })

export default PasswordInput;