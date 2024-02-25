import React, {useState} from 'react';
import Item from './Item';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const List = () => {

  const [items, setItems] = useState([
    {
      id: 0,
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    }
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={items}
        renderItem={({item}) => <Item name={item.name} image={item.image} info={item.info} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: "100%"
  },
  title: {
    fontSize: 32,
  },
});

export default List;


/*import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Item from "./Item";

const List = () => {
  const [items, setItems] = useState([
    {
      image: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      image: "https://images.unsplash.com/photo-1532980400857-e8d9d275d858?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      image: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    },
    {
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Header",
      info: "He'll want to use your yacht, and I don't want this thing smelling like fish.9",
    }
  ]);

  function drawItem(items) {
    return items.map((item, i) => (
      <Item image={item.image} name={item.name} price={item.price} info={item.info} key={i} />
    ));
  }
  return <View style={styles.container}>{drawItem(items)}</View>;
};

export default List;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});*/
