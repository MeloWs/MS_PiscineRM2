import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, FlatList,Button } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

const DrawerTest = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect( () => {
     async function pokeBall () {
      const datas = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0%22");
      const pokemon = await datas.json();
      setData(pokemon.results)
      
      console.log(navigation,'toto')

      return pokemon
    }
    pokeBall().then(pokemon => console.log(pokemon))
  }, [])
  
  

  return (
   <FlatList
      data={data}
      keyExtractor={({ url }, index) => url}
      renderItem={({ item }) => (
        <Text
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
  )
}
export default function CustomDrawerContent(props) {

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerTest />
    </DrawerContentScrollView>
  );
}

