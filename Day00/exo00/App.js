//import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    backgroundColor: "#E5E5E5",
  },
  imgMain: {
    width: "100%",
    height: "20%",
    marginTop: 120,
    marginBottom: 30,
  },
  container2: {
    backgroundColor: "white",
    flex: 1,
    width: "100%",
    //alignItems: 'center',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 17,
    marginBottom: 22,
  },
  brand: {
    color: "#E5E5E5",
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 3,
  },
  button: {
    backgroundColor: "black",
    padding: 9,
    flexDirection: "row",

    borderRadius: 5,
    alignItems: "center",
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/img/shoe_1.png")}
        style={styles.imgMain}
      />
      <View style={styles.container2}>
        <Text style={styles.brand}>Adidas</Text>
        <Text style={styles.title}>Yeezy Boost 350 V2 Black Red</Text>
        <View style={{ flexDirection: "row", marginVertical: 20 }}>
          <View
            style={{
              borderWidth: 2,
              flex: 0.4,
              borderColor: "#E5E5E5",
              flexDirection: "row",
              padding: 8,
              borderRadius: 5,
              marginRight: 8,
              alignItems: "center",
            }}
          >
            <Text style={{ flex: 0.5 }}>42</Text>
            <Text style={{ flex: 0.5, textAlign: "right" }}>340€</Text>
          </View>
          <View style={{ flex: 0.5 }}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./assets/img/icon_buy.png")}
                style={{ width: 41, height: 37, flex: 0.3 }}
              />
              <Text
                style={{
                  color: "white",
                  flex: 0.3,
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                BUY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text>
          The
          <Text style={{ fontWeight: "bold" }}> Yeezy 350 Boost V2 Bred </Text>
          stands out for its sobriety and simplicity. Unlike most V2 shoes that
          feature a patterned print, this shoe has a monochrome black upper with
          <Text style={{ fontWeight: "bold" }}> red stitching</Text>. Yeezy has
          a monochrome black upper with red stitching that reads SPLY-350. The
          silhouette is set on a black boost sole semi-translucent.
        </Text>
        <Text
          style={{ fontWeight: "bold", marginVertical: 20, lineHeight: 25 }}
        >
          SKU: CP9652 {"\n"}Release date: February 2017 {"\n"}Colorway: CORE
          BLACK/CORE BLACK/RED
        </Text>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

export default App;
