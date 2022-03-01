import { StatusBar } from "expo-status-bar"
import { SafeAreaView, FlatList, Pressable } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import tw from "twrnc"
import { Feather } from "@expo/vector-icons"
import { createStore } from "redux"
import { Provider, useSelector } from "react-redux"
import reducers from "./reducers"
import { loadState, saveState } from "./storage"
import Row from "./components/Row"
import EditPassword from "./components/EditPassword"
import DetailPassword from "./components/DetailPassword"
import { useState } from "react"

export function Home({ navigation }) {
  const passwords = useSelector((state) => state.passwords)

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <FlatList
        style={tw`bg-gray-200 py-2`}
        data={passwords}
        renderItem={({ item, index }) => (
          <Row password={item} index={index} navigation={navigation} />
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  )
}

const Stack = createStackNavigator()

export default function App() {
  const persistedState = loadState()
  const store = createStore(reducers, persistedState)
  store.subscribe(() => saveState(store.getState()))

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Provider store={store}>
      <EditPassword
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false)
        }}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Passwords"
            component={Home}
            options={{
              headerRight: () => (
                <Pressable onPress={() => setModalVisible(true)}>
                  <Feather name="plus" size={24} style={tw`text-gray-400 mr-4`} />
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="DetailPassword"
            component={DetailPassword}
            style={tw`bg-gray-200 py-2`}
            options={() => ({ title: "Detail Password" })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
