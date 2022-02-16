import React from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"
import { Feather } from "@expo/vector-icons"

export default function Row({ animal, navigation }) {
  const rating = (() => {
    let ans = 0
    for (const key in animal) {
      if (!isNaN(animal[key])) {
        ans += animal[key]
      }
    }
    ans /= Object.entries(animal).length
    ans = Math.round(ans)

    return ans
  })()

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
      onPress={() =>
        navigation.navigate("Detail", {
          animal,
        })
      }
    >
      <View style={tw`flex flex-row items-center`}>
        <Text style={tw`font-600 text-lg text-black`}>{animal.breed}</Text>
        <View style={tw`flex-grow`}></View>
        <Text style={tw`text-yellow-500 text-lg mr-1`}>{"✦".repeat(rating)}</Text>
        <Feather name="chevron-right" size={24} style={tw`text-gray-400`} />
      </View>
    </Pressable>
  )
}
