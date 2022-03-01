import React from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"
import { Feather } from "@expo/vector-icons"

export default function Row({ password, navigation }) {
  return (
    <Pressable
      style={tw`my-2 mx-4 p-3 bg-gray-50 rounded-xl`}
      style={({ pressed }) =>
        tw.style(
          "my-2 mx-4 p-3 rounded-xl",
          pressed ? "bg-gray-100" : "bg-gray-50",
          pressed ? "border border-gray-300" : "border border-gray-200"
        )
      }
      onPress={() => navigation.navigate("Detail", {})}
    >
      <View style={tw`flex flex-row items-center`}>
        <Text style={tw`font-600 text-lg text-black`}>{password.name}</Text>
        <View style={tw`flex-grow`} />
        <Feather name="chevron-right" size={24} style={tw`text-gray-400`} />
      </View>
    </Pressable>
  )
}
