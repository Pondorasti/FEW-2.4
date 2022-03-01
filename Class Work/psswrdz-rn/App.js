import { StatusBar } from "expo-status-bar"
import { SafeAreaView, FlatList, Pressable } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import tw from "twrnc"
import { Feather } from "@expo/vector-icons"
import { createStore } from "redux"
import { Provider, useSelector, useDispatch } from "react-redux"
import reducers from "./reducers"
import { loadState, saveState } from "./storage"
import Row from "./components/Row"
import { useEffect } from "react"
import { addPassword } from "./actions"

export function Home({ navigation }) {
  const passwords = useSelector((state) => state.passwords)
  console.log(passwords)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(addPassword("vercel", "1234pwd"))
  // }, [])

  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <FlatList
        style={tw`bg-gray-200 py-2`}
        data={passwords}
        renderItem={({ item }) => <Row password={item} navigation={navigation} />}
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

  return (
    <Provider store={store}>
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
    </Provider>
  )
}
