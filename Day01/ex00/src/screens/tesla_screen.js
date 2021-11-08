import React from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
//import carList from "../../components/cars";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#3F3E3E",
    fontSize: 32,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  header: {
    width: "100%",
    paddingHorizontal: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imgIcon: {
    width: 205,
    height: 125,
    resizeMode: "center",
    flex: 0.5,
  },
  menuLink: {
    backgroundColor: "rgba(196, 196, 196, 0.39)",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
});

export function TeslaModelS({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/ModelS.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/img/tesla_icon.png")}
            style={styles.imgIcon}
          />
          <View style={{ flex: 0.2 }}>
            <Text
              style={styles.menuLink}
              onPress={() => navigation.toggleDrawer()}
            >
              Menu
            </Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Text style={styles.title}>Model S</Text>
          <Text style={{}}>
            Order Online for{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Touchless Delivery
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
          }}
        >
          <Text
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.62)",
              padding: 20,
              color: "white",
              fontSize: 15,
              letterSpacing: 1,
              textTransform: "uppercase",
              width: "80%",
              textAlign: "center",
              borderRadius: 30,
            }}
          >
            Custom Order
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export function TeslaModel3({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/Model3.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/img/tesla_icon.png")}
            style={styles.imgIcon}
          />
          <View style={{ flex: 0.2 }}>
            <Text
              style={styles.menuLink}
              onPress={() => navigation.toggleDrawer()}
            >
              Menu
            </Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Text style={styles.title}>Model 3</Text>
          <Text style={{}}>
            Order Online for{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Touchless Delivery
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
          }}
        >
          <Text
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.62)",
              padding: 20,
              color: "white",
              fontSize: 15,
              letterSpacing: 1,
              textTransform: "uppercase",
              width: "80%",
              textAlign: "center",
              borderRadius: 30,
            }}
          >
            Custom Order
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export function TeslaModelY({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/ModelY.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/img/tesla_icon.png")}
            style={styles.imgIcon}
          />
          <View style={{ flex: 0.2 }}>
            <Text
              style={styles.menuLink}
              onPress={() => navigation.toggleDrawer()}
            >
              Menu
            </Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Text style={styles.title}>Model Y</Text>
          <Text style={{}}>
            Order Online for{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Touchless Delivery
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
          }}
        >
          <Text
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.62)",
              padding: 20,
              color: "white",
              fontSize: 15,
              letterSpacing: 1,
              textTransform: "uppercase",
              width: "80%",
              textAlign: "center",
              borderRadius: 30,
            }}
          >
            Custom Order
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
export function TeslaModelX({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/img/ModelX.jpeg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <Image
            source={require("../../assets/img/tesla_icon.png")}
            style={styles.imgIcon}
          />
          <View style={{ flex: 0.2 }}>
            <Text
              style={styles.menuLink}
              onPress={() => navigation.toggleDrawer()}
            >
              Menu
            </Text>
          </View>
        </View>
        <View
          style={{ alignItems: "center", flex: 1, justifyContent: "center" }}
        >
          <Text style={styles.title}>Model X</Text>
          <Text style={{}}>
            Order Online for{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Touchless Delivery
            </Text>
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 30,
          }}
        >
          <Text
            style={{
              backgroundColor: "rgba(5, 5, 5, 0.62)",
              padding: 20,
              color: "white",
              fontSize: 15,
              letterSpacing: 1,
              textTransform: "uppercase",
              width: "80%",
              textAlign: "center",
              borderRadius: 30,
            }}
          >
            Custom Order
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
