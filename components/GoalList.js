import React from "react";
import { Text, StyleSheet } from "react-native";

const GoalList = (prop) => {
  return <Text style={styles.goalEntry}>{prop.text}</Text>;
};

const styles = StyleSheet.create({
  goalEntry: {
    textAlign: "center",
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 10,
    // paddingLeft: 15,
    borderRadius: 10,
    marginTop: 15,
  },
});

export default GoalList;
