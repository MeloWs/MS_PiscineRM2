import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

export default function ScrollElement2({
  imgMain,
  imgIcon,
  textElmt1,
  textElmt2,
}) {
  return (
    <View
      style={{
        //height: 330,
        backgroundColor: "white",
        marginLeft: 15,
        borderRadius: 20,
        paddingBottom: 90,
      }}
    >
      <Image
        source={imgMain}
        style={{
          height: 231,
          width: 303,
          resizeMode: "cover",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
      <View style={{ flexDirection: "row", padding: 20 }}>
        <Image
          source={imgIcon}
          style={{
            height: 50,
            width: 50,
            resizeMode: "center",
            marginRight: 20,
          }}
        />
        <View style={{ justifyContent: "center" }}>
          <Text style={{ letterSpacing: 1, fontSize: 22, fontWeight: "bold" }}>
            {textElmt1}
          </Text>
          <Text style={{ fontSize: 16, color: "#C4C4C4" }}>{textElmt2}</Text>
        </View>
      </View>
    </View>
  );
}
