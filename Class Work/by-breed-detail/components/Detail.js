import { View, Text, FlatList } from "react-native"
import tw from "twrnc"
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons"

const icons = {
  "Affectionate with Family": <MaterialIcons name="groups" size={24} color="black" />,
  "Amount of Shedding": <MaterialIcons name="equalizer" size={24} color="black" />,
  "Easy to Groom": <MaterialIcons name="blur-on" size={24} color="black" />,
  "Friendly Toward Strangers": (
    <MaterialCommunityIcons name="account-question" size={24} color="black" />
  ),
  "General Health": <MaterialIcons name="medical-services" size={24} color="black" />,
  Intelligence: <MaterialIcons name="graphic-eq" size={24} color="black" />,
  "Kid Friendly": <MaterialIcons name="child-friendly" size={24} color="black" />,
  "Pet Friendly": <MaterialIcons name="pets" size={24} color="black" />,
  "Potential for Playfulness": <MaterialIcons name="videogame-asset" size={24} color="black" />,
  "Tendency to Vocalize": <MaterialIcons name="mic" size={24} color="black" />,
}

export default function DetailScreen({ route }) {
  const { animal } = route.params
  const keys = Object.keys(animal)
    .map((key) => {
      if (key === "breed" || isNaN(animal[key])) {
        return null
      }
      return key
    })
    .filter((value) => value !== null)

  console.log(keys)

  return (
    <View style={tw`bg-gray-200 h-full`}>
      <FlatList
        style={tw`m-4 p-3 bg-gray-50 rounded-xl `}
        data={keys}
        renderItem={({ item }) => (
          <View style={tw`flex flex-row`}>
            {icons[item]}
            <Text style={tw`text-base ml-3`}>{item}</Text>
            <View style={tw`flex-grow`} />
            <Text style={tw`text-base`}>{animal[item]}</Text>
          </View>
        )}
        keyExtractor={(key) => key}
        ItemSeparatorComponent={() => <View style={tw`h-px w-full bg-gray-300 my-2`} />}
      />
    </View>
  )
}
