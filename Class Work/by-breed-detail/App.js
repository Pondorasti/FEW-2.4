import { StatusBar } from "expo-status-bar"
import { SafeAreaView, FlatList, Button } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import tw from "twrnc"
import Row from "./components/Row"
import Detail from "./components/Detail"
import { cats } from "./breeds"

export function Home({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <FlatList
        style={tw`bg-gray-200 py-2`}
        data={cats}
        renderItem={({ item }) => <Row animal={item} navigation={navigation} />}
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
        <Stack.Screen name="Cats" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
