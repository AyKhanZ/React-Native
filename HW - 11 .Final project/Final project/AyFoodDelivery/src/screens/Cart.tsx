import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useCart } from "../context/CartContext";
import { Users } from "../data/Users";
import ProductItem from "../components/ProductItem";

const Cart = () => {
  const [ifPressed, setIfPressed] = useState(false);
  let cart = useCart();
  const email = cart.cartObj.email;

  const showProducts = (c: any, n: number) => {
    return c.map((p: any, n: number) => <Text key={n}>{p.title}</Text>);
  };
  const showUserProducts = () => {
    return Users.map((u: any, i: number) => {
      if (u.email == email) {
        return showProducts(u.cart, i);
      }
    });
  };
  return (
    <View>
      <Text>Cart</Text>

      <Pressable onPress={() => setIfPressed(!ifPressed)}>
        <Text>Click</Text>
      </Pressable>
      {ifPressed ? showUserProducts() : <>{setIfPressed(!ifPressed)}</>}
    </View>
  );
};

export default Cart;
