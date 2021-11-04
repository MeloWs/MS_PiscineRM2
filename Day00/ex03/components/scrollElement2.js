import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

export default function ScrollElement2() {
  return (
    <View
      style={{
        //height: 330,
        backgroundColor: "white",
        marginLeft: 15,
        borderRadius: 20,
      }}
    >
      <Image
        style={{
          height: 231,
          width: 303,
          resizeMode: "cover",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: "grey",
        }}
      />
      <View
        style={{
          padding: 20,
          paddingBottom: 30,
        }}
      >
        <Text
          style={{
            marginBottom: 10,
            backgroundColor: "grey",
            height: 11,
            width: "60%",
            borderRadius: 10,
          }}
        ></Text>
        <Text
          style={{
            backgroundColor: "grey",
            height: 11,
            width: "20%",
            borderRadius: 10,
          }}
        ></Text>
      </View>
    </View>
  );
}
