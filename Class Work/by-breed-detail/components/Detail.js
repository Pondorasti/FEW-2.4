import { View, Text, FlatList } from "react-native"
import tw from "twrnc"

export default function DetailScreen({ route }) {
  const { animal } = route.params
  const qualities = Object.keys(animal)
    .map((key) => {
      if (key === "breed" || isNaN(animal[key])) {
        return null
      }
      return key
    })
    .filter((value) => value !== null)

  console.log(qualities)

  return (
    <View style={tw`bg-gray-200 h-full`}>
      <View style={tw`m-4 p-3 bg-gray-50 rounded-xl `}>
        {Object.keys(animal).map((key) => {
          if (key === "breed" || isNaN(animal[key])) {
            return null
          }
          return (
            <View style={tw`flex flex-row justify-between`}>
              <Text style={tw`text-base`}>• {key}</Text>
              <Text style={tw`text-base`}>{animal[key]}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
}
