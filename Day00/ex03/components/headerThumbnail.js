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
          style={{
            height: 80,
            width: 80,
            resizeMode: "center",
            marginRight: 20,
            backgroundColor: "white",
            borderRadius: "100%",
          }}
        />
        <View style={{ flex: 0.9 }}>
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
}

export default HeaderThumbnail;
