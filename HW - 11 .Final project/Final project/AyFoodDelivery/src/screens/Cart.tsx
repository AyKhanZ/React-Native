import React from "react";
import { View, Text } from "react-native";
import { useCart } from "../context/CartContext";
import { Users } from "../data/Users";

const Cart = () => {
  const cartObj = useCart();
  // console.log(cartObj);
  // console.log(Users);
  return (
    <View>
      <Text>Cart</Text>
    </View>
  );
};

export default Cart;
