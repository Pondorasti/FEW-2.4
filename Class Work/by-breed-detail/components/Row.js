import React from "react"
import { View, Text, Pressable } from "react-native"
import tw from "twrnc"

export default function Row({ animal }) {
  let rating = 0
  for (const key in animal) {
    if (!isNaN(animal[key])) {
      rating += animal[key]
    }
  }
  rating /= Object.entries(animal).length
  rating = Math.round(rating)

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
      onPress={() => console.log("hello")}
    >
      <View style={tw`flex flex-row justify-between items-center mb-1`}>
        <Text style={tw`font-600 text-lg text-black`}>{animal.breed}</Text>
        <Text style={tw`text-yellow-500 text-lg`}>{"✦".repeat(rating)}</Text>
      </View>
      <Text style={tw`text-black`}>
        • Affectionate: {animal["Affectionate with Family"] || "∅"}
      </Text>
      <Text style={tw`text-black`}>• Friendliness: {animal["Pet Friendly"] || "∅"}</Text>
      <Text style={tw`text-black`}>
        • Playfulness: {animal["Potential for Playfulness"] || "∅"}
      </Text>
    </Pressable>
  )
}

// [
//   {
//     backgroundColor: pressed ? "rgb(210, 230, 255)" : "white",
//   },
//   styles.wrapperCustom,
// ]
