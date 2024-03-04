import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useCart } from "../context/CartContext";
import { Users } from "../data/Users";
import ProductItem from "../components/ProductItem";

const Cart = () => {
  const [cartObj, setCartObj] = useState({});
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   let c = useCart();
  //   // setCartObj(c);
  //   console.log(c);
  // }, [Users]);
  return (
    <View>
      <Text>Cart</Text>

      {/* {products.map((product, i) => (
        <Text key={i}>{product.title}</Text>
      ))} */}
    </View>
  );
};

export default Cart;
