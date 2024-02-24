import React, { useState } from 'react'
import { View } from 'react-native'
import List from './List';

const HotDeals = () => {

    const [items, setItems] = useState([
        {
          image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1521986329282-0436c1f1e212?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1569420067112-b57b4f024595?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        }
      ]);
    

  return (
    <View>
        <List items={items}></List>
    </View>
  )
}

export default HotDeals