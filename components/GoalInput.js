import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

const GoalInput = (prop) => {
  const [enteredText, setEnteredText] = useState("");

  const inputHandler = (text) => {
    setEnteredText(text);
  };

  return (
    <View style={styles.addGoals}>
      <TextInput
        style={styles.inputField}
        placeholder="Type your goal here"
        onChangeText={inputHandler}
        value={enteredText}
      />
      <Button
        title="Add goal"
        onPress={() => {
          prop.function(enteredText);
          setEnteredText("");
        }}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  addGoals: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputField: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 3,
    paddingLeft: 15,
    marginRight: 10,
  },
});
