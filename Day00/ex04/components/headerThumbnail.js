import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    maxHeight: "15%",
    alignItems: "center",
  },
});

class HeaderThumbnail extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={require("../assets/img/circle_iconn.png")}
          style={{
            height: 80,
            width: 80,
            resizeMode: "center",
            marginRight: 20,
          }}
        />
        <View style={{ flex: 0.9 }}>
          <Text style={{ color: "#C4C4C4", fontSize: 15, marginBottom: 5 }}>
            Welcome back,
          </Text>
          <Text style={{ color: "#494848" }}>{this.props.name}</Text>
        </View>
        <Image
          source={require("../assets/img/calendar_icon.png")}
          style={{
            height: 30,
            width: 30,
            resizeMode: "center",
            marginLeft: 20,
          }}
        />
      </View>
    );
  }
}

export default HeaderThumbnail;
