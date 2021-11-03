import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/img/it-akademy.png")}
        style={styles.imgMain}
      />
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
  imgMain: {
    width: 250,
    height: 255,
    resizeMode: "center",
  },
});
