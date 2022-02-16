import { StatusBar } from "expo-status-bar"
import { SafeAreaView, FlatList } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import tw from "twrnc"
import Item from "./components/Item"
import { cats } from "./breeds"

export function Home() {
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

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pets" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
