import React, { useState } from 'react';
import { View } from 'react-native';
import List from './List';

const Trending = () => {

    const [items, setItems] = useState([
        {
          image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1477506350614-fcdc29a3b157?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1543352632-fea6d4f83e78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Item #1 Name Goes Here",
          price: "$19.99",
        },
        {
          image: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export default Trending