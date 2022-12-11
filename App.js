import { StyleSheet, Text, TextInput, View } from "react-native";
import List from "./components/List";
import InputComponent from "./components/InputComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.main_text}>Test App</Text>
      <InputComponent />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  main_text: {
    marginBottom: 10,
    fontSize: 20,
    padding: 10,
    fontWeight: "900",
    color: "yellow",
    backgroundColor: "blue",
  },
});
