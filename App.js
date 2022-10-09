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
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const btnPressed = (enteredText) => {
    if (enteredText === "") {
      setGoals((current) => [...current]);
    } else {
      setGoals((current) => [...current, enteredText]);
    }
  };

  return (
    <View style={styles.container}>
      <GoalInput function={btnPressed} />

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
  goalsList: {
    flex: 4,
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
