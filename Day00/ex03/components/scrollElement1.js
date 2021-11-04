import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

export default function ScrollElement1({ imgLink, textElmt1 }) {
  return (
    <View
      style={{
        height: 80,
        padding: 20,
        minWidth: 150,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        marginLeft: 15,
        borderRadius: 20,
      }}
    ></View>
  );
}
