import { StatusBar } from "expo-status-bar"
import { Text, View, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() =>
          navigation.navigate("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          })
        }
      />
      <StatusBar style="auto" />
    </View>
  )
}

function DetailScreen({ route, navigation }) {
  const { itemId, otherParam } = route.params

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: 86,
            otherParam: "anything you want here",
          })
        }
      />
      <Button title="Go back home" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{
            title: "Hello World",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 24,
            },
          }}
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
