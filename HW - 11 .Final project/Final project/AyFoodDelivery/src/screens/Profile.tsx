import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { useUser } from "../context/UserContext";
import Title from "../components/Title";
import Btn from "../components/Btn";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/Index";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  navigation: StackNavigationProp<RootStackParams, "AddressChange">;
};

const windowWidth = Dimensions.get("window").width;

const Profile = ({ navigation }: Props) => {
  const userData = useUser();
  const user = userData.user;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Profile</Text>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.password}</Text>

        <Title title={"Address"} />
        <Btn
          btnText="Change"
          onPress={() => navigation.navigate("AddressChange")}
        />
        <Text>{user.deliveryAdress?.street}</Text>
        <Text>{user.deliveryAdress?.city}</Text>
        <Text>{user.deliveryAdress?.country}</Text>
        <Text>{user.deliveryAdress?.apartment}</Text>

        <Text>{user.nonContactDelivery}</Text>

        <Text>fa {user.favorites}</Text>

        <Text>cart {user.cart}</Text>

        <Text style={styles.title}>Card</Text>
        <Text>cart {user.paymentMethod?.hexCode}</Text>
        <Text>cart {user.paymentMethod?.date}</Text>
        <Text>cart {user.paymentMethod?.cvv}</Text>
        <Btn
          btnText="Change"
          onPress={() => navigation.navigate("CardChange")}
        />
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignSelf: "center",
    width: windowWidth * 0.9,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
  },
});
