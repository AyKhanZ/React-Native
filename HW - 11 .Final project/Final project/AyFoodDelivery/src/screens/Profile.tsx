import React from "react";
import { View, Text, Pressable } from "react-native";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const userData = useAuth();
  console.log(userData);
  return (
    <View>
      <Text>Profile</Text>
      {/* <Pressable onPress={()=>}>Sign out</Pressable> */}
    </View>
  );
};

export default Profile;
