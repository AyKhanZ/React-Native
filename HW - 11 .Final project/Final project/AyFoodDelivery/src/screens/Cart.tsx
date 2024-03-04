import { useEffect, useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useCart } from "../context/CartContext";
import { Users } from "../data/Users";
import ProductItem from "../components/ProductItem";

const Cart = () => {
  const [ifPressed, setIfPressed] = useState(false);
  // const [products, setProducts] = useState([]);
  let cart = useCart();
  const email = cart.cartObj.email;
  console.log(email);

  // useEffect(() => {
  //   console.log(Users);
  // }, [Users]);
  const showProducts = (c: any, n: number) => {
    return c.map((p: any, n: number) => <Text key={n}>{p.title}</Text>);
  };
  const showUserProducts = () => {
    return Users.map((u: any, i: number) => {
      if (u.email == email) {
        console.log(u.cart);
        return showProducts(u.cart, i);
      }
    });
  };
  // useEffect(() => {
  //   showUserProducts();
  // }, [Users]);
  return (
    <View>
      <Text>Cart</Text>

      <Pressable onPress={() => setIfPressed(!ifPressed)}>
        <Text>Click</Text>
      </Pressable>
      {ifPressed ? showUserProducts() : <></>}
    </View>
  );
};

export default Cart;
