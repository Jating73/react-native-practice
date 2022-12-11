import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function InputComponent() {
  let [username, setUsername] = useState("Jatin");
  let [fruit, setFruit] = useState("Apple");
  let [amount, setAmount] = useState(20);

  let [buttonClicked, setButtonClicked] = useState(false);

  const handleClicked = () => {
    setButtonClicked((prevState) => !prevState);
  };

  const changeValues = () => {
    alert("Updated Successfully!");
  };

  return (
    <View>
      <Text>
        {username} is eating {fruit} which costs ${amount}
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Username"
        onChangeText={(e) => setUsername(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Fruit Name"
        onChangeText={(e) => setFruit(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        onChangeText={(e) => setAmount(e)}
      />
      <Button title="Update" onPress={changeValues} color="#A4C936" />
      <View>
        <Text style={styles.buttonText}>
          Button Clicked - {buttonClicked.toString()}
        </Text>
        <Button
          title="Click Me!"
          onPress={handleClicked}
          style={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    color: "blue",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    margin: 5,
  },
  buttonText: {
    textAlign: "center",
  },
});

export default InputComponent;
