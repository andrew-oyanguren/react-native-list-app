import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ goalTitle, onDelete, itemId }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onDelete.bind(this, itemId)}>
      <View style={styles.listItem}>
        <Text>{goalTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
