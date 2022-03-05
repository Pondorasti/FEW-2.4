import * as React from "react"
import { Text, View } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons } from "react-native-vector-icons"
import Bands from "./components/Bands"
import Stats from "./components/Stats"
import Styles from "./components/Styles"

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Bands") {
              iconName = focused ? "hand-left" : "hand-left-outline"
            } else if (route.name === "Stats") {
              iconName = focused ? "bar-chart" : "bar-chart-outline"
            } else if (route.name === "Styles") {
              iconName = focused ? "flower" : "flower-outline"
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#f00",
          tabBarInactiveTintColor: "#600",
          tabBarActiveBackgroundColor: "#111",
          tabBarInactiveBackgroundColor: "#000",
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "#fff",
        })}
      >
        <Tab.Screen name="Bands" component={Bands} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Styles" component={Styles} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
