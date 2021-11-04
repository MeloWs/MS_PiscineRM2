import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";

import HeaderThumbnail from "./components/headerThumbnail";
import ScrollElement1 from "./components/scrollElement1";
import ScrollElement2 from "./components/scrollElement2";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    //alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#C4C4C4",
    padding: 20,
    fontSize: 16,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderThumbnail name={"Wolfgang"} />
      <SafeAreaView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal="true"
          style={{ flexDirection: "row", marginBottom: 10 }}
        >
          <ScrollElement1
            imgLink={require("./assets/img/javascript.png")}
            textElmt1="Javascript"
          />
          <ScrollElement1
            imgLink={require("./assets/img/react.png")}
            textElmt1="React"
          />
          <ScrollElement1
            imgLink={require("./assets/img/react.png")}
            textElmt1="React"
          />
        </ScrollView>
      </SafeAreaView>
      <View style={{}}>
        <Text style={styles.title}>CONTINUE LEARNING</Text>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal="true"
          style={{ flexDirection: "row" }}
        >
          <ScrollElement2
            imgMain={require("./assets/img/abstract_bg.jpg")}
            imgIcon={require("./assets/img/react.png")}
            textElmt1="React.js"
            textElmt2="5 OF 12 SECTIONS"
          />
          <ScrollElement2
            imgMain={require("./assets/img/abstract_bg.jpg")}
            imgIcon={require("./assets/img/redux.png")}
            textElmt1="React.js"
            textElmt2="5 OF 12 SECTIONS"
          />
        </ScrollView>
      </SafeAreaView>
      <View style={{}}>
        <Text style={styles.title}>NEXT PISCINES</Text>
      </View>
      <SafeAreaView>
        <ScrollView>
          <View
            style={{
              //height: 330,
              width: "90%",
              backgroundColor: "white",
              marginLeft: 15,
              borderRadius: 20,
            }}
          >
            <Image
              source={require("./assets/img/abstract_bg.jpg")}
              style={{
                height: 231,
                width: 345,
                resizeMode: "cover",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
