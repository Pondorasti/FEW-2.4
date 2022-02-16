import { StatusBar } from "expo-status-bar"
import { StyleSheet, SafeAreaView, FlatList } from "react-native"
import tw from "twrnc"
import Item from "./components/Item"
import { cats } from "./breeds"

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <FlatList
        style={tw`bg-gray-200`}
        data={cats}
        renderItem={({ item }) => <Item animal={item} />}
        keyExtractor={(item) => item.breed}
      />
    </SafeAreaView>
  )
}
