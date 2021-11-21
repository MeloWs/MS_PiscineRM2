import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, FlatList, Button } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const DrawerTest = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  const [fontsLoaded, error] = Font.useFonts({
    PressStart2P: require("../../assets/fonts/PressStart2P-Regular.ttf"),
    DotGothic: require("../../assets/fonts/DotGothic16-Regular.ttf"),
  });

  useEffect(() => {
    async function pokeBall() {
      const datas = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
      );
      const pokemon = await datas.json();
      setData(pokemon.results);

      //return pokemon;
    }
    pokeBall().then((pokemon) => console.log(pokemon));
  }, []);
  if (fontsLoaded) {
  return (
    <FlatList
      data={data}
      keyExtractor={({ url }, index) => url}
      renderItem={({ item }) => (
        <Text style={{fontSize: 22,
          paddingHorizontal: 8,
          textShadowColor: "rgba(0,0,0,.3)",
          textShadowOffset: { width: 1, height: 1 },
          textShadowRadius: 1,
          textTransform: "capitalize",
          fontFamily: "DotGothic",}}
          onPress={() =>
            navigation.navigate("Detail", {
              item: item,
              url: item.url,
            })
          }
        >
          {" "}
          {item.name}
        </Text>
      )}
    />
  );
} else {
  return <AppLoading />;
}
};
export default function CustomDrawerContent(props) {
  return (
    <View style={{borderWidth:5, height: "100%"}}>
      <DrawerContentScrollView {...props}>
        , <DrawerItemList {...props} />
        <DrawerTest />
      </DrawerContentScrollView>
    </View>
  );
}
