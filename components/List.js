import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function List() {
  let [todos, setTodos] = useState([
    { id: 1, task: "HTML I", done: true },
    { id: 2, task: "CSS", done: true },
    { id: 3, task: "Responsive design", done: true },
    { id: 4, task: "Git", done: true },
    { id: 5, task: "JavaScript I", done: true },
    { id: 6, task: "JavaScript II", done: false },
  ]);

  return (
    <View style={styles.list}>
      {todos.map((item) => (
        <Text key={item.id} style={styles.item}>
          {item.task} - {item.done.toString()}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    marginTop: 20,
  },
  item: {
    marginTop: 5,
    fontSize: 20,
    backgroundColor: "red",
    color: "white",
    padding: 5,
  },
});

export default List;
