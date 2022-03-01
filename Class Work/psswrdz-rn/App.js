import { StatusBar } from "expo-status-bar"
import { SafeAreaView, FlatList, Pressable } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import tw from "twrnc"
import { Feather } from "@expo/vector-icons"
import Row from "./components/Row"

export function Home({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      {/* <FlatList
        style={tw`bg-gray-200 py-2`}
        data={cats}
        renderItem={({ item }) => <Row animal={item} navigation={navigation} />}
        keyExtractor={(item) => item.breed}
      /> */}

      <Row navigation={navigation} />
      <Row navigation={navigation} />
      <Row navigation={navigation} />
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Passwords"
          component={Home}
          options={{
            headerRight: () => (
              <Pressable onPress={() => alert("This is a button!")}>
                <Feather name="plus" size={24} style={tw`text-gray-400 mr-4`} />
              </Pressable>
            ),
          }}
        />
        {/* <Stack.Screen
          name="Detail"
          component={Detail}
          style={tw`bg-gray-200 py-2`}
          options={({ route }) => ({ title: route.params.animal.breed })}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
