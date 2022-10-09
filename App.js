import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalList from "./components/GoalList";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = (text) => {
    setEnteredText(text);
  };

  const btnPressed = () => {
    if (enteredText === "") {
      setGoals((current) => [...current]);
    } else {
      setGoals((current) => [...current, enteredText]);
    }
    setEnteredText("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.addGoals}>
        <TextInput
          style={styles.inputField}
          placeholder="Type your goal here"
          onChangeText={inputHandler}
          value={enteredText}
        />
        <Button style={styles.btn} title="Add goal" onPress={btnPressed} />
      </View>
      <View style={styles.goalsList}>
        <FlatList
          data={goals}
          renderItem={(el) => <GoalList text={el.item} />}
        />
        <StatusBar barStyle="light-content" backgroundColor="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100 + "%",
    marginLeft: 20,
    marginRight: 20,
  },
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
  goalsList: {
    flex: 4,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
