import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

const GoalInput = (prop) => {
  const [enteredText, setEnteredText] = useState("");

  const inputHandler = (text) => {
    setEnteredText(text);
  };

  const addInList = () => {
    prop.function(enteredText);
    setEnteredText("");
    prop.closeVisibility();
  };

  return (
    <Modal visible={prop.visibility} animationType="slide">
      <View style={styles.addGoals}>
        <TextInput
          style={styles.inputField}
          placeholder="Type your goal here"
          onChangeText={inputHandler}
          value={enteredText}
        />
        <View style={styles.btns}>
          <Button title="Add goal" color="#5e0acc" onPress={addInList} />
          <Button
            onPress={() => {
              prop.closeVisibility();
              setEnteredText("");
            }}
            title="Close"
            color="#5e0acc"
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  addGoals: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  inputField: {
    width: "80%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    paddingLeft: 20,
    marginRight: 10,
    backgroundColor: "white",
  },
  btns: {
    marginTop: 60,
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
