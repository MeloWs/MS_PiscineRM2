import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  Text,
  Pressable,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgMain: {
    height: 110,
    width: 116,
    resizeMode: "center",
    alignSelf: "center",
    marginVertical: 20,
  },
  boxCenter: {
    width: "90%",
    borderRadius: 11,
    padding: 25,
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  input: {
    flex: 0.8,
    color: "#E5E5E5",
    fontSize: 25,
    maxWidth: "80%",
    padding: 5,
  },
  inputImage: {
    width: 40,
    height: 30,
    resizeMode: "center",
    flex: 0.2,
    opacity: 0.4,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.boxCenter, styles.shadowProp]}>
        <Image
          source={require("./assets/img/it-akademy.png")}
          style={styles.imgMain}
        />
        <View
          style={{
            borderRadius: 11,
            borderWidth: 1,
            borderColor: "#E5E5E5",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            marginVertical: 10,
          }}
        >
          <TextInput placeholder="Email" style={styles.input} />
          <Image
            source={require("./assets/img/mail.png")}
            style={styles.inputImage}
          />
        </View>
        <View
          style={{
            borderRadius: 11,
            borderWidth: 1,
            borderColor: "#E5E5E5",
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            marginVertical: 10,
          }}
        >
          <TextInput placeholder="Password" style={styles.input} />
          <Image
            source={require("./assets/img/lock.png")}
            style={styles.inputImage}
          />
        </View>
        <Pressable
          style={{
            padding: 20,
            borderRadius: 10,
            backgroundColor: "#E84710",
            color: "white",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 26, textAlign: "center" }}>
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
