import { useState } from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"
import { Feather } from "@expo/vector-icons"
import { useDispatch } from "react-redux"
import { deletePassword } from "../actions"

export default function Detail({ route, navigation }) {
  const { name, password, index } = route.params
  const securePassword = [...password].reduce((prev) => prev + "•", "")

  const [showPassword, setShowPassword] = useState(false)
  const dispatch = useDispatch()

  return (
    <View style={tw`bg-gray-200 py-2 h-full`}>
      <View style={tw`my-2 mx-4 p-3 bg-gray-50 rounded-xl`}>
        <Text style={tw`font-500 text-lg text-black`}>{name}</Text>
      </View>
      <View style={tw`my-2 mx-4 p-3 bg-gray-50 rounded-xl`}>
        <View style={tw`flex flex-row items-center`}>
          <Text style={tw`font-500 text-lg text-black`}>
            {showPassword ? password : securePassword}
          </Text>
          <View style={tw`flex-grow`} />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <Feather name={showPassword ? "eye-off" : "eye"} size={24} style={tw`text-gray-400`} />
          </Pressable>
        </View>
      </View>
      <Pressable style={tw`my-2 mx-4 p-3 bg-sky-500 rounded-xl`}>
        <Text style={tw`font-500 text-lg text-white text-center`}>Edit</Text>
      </Pressable>
      <Pressable
        style={tw`my-2 mx-4 p-3 bg-red-500/50 rounded-xl border border-red-500`}
        onPress={() => {
          dispatch(deletePassword(index))
          navigation.goBack()
        }}
      >
        <Text style={tw`font-500 text-lg text-white text-center`}>Delete</Text>
      </Pressable>
    </View>
  )
}
