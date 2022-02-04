import { StatusBar } from "expo-status-bar"
import { StyleSheet, SafeAreaView, FlatList } from "react-native"
import Item from "./components/Item"
import { dogs } from "./breeds"

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <FlatList
        data={dogs}
        renderItem={({ item }) => <Item title={item.breed} />}
        keyExtractor={(item) => item.breed}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
