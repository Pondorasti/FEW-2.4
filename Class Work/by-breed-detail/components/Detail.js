import { View, Text } from "react-native"
import tw from "twrnc"

export default function DetailScreen({ route, navigation }) {
  const { animal } = route.params
  console.log(animal)

  return (
    <View>
      <Text>Details Screen</Text>
      <Text style={tw`text-black`}>• Affectionate:</Text>
      <Text style={tw`text-black`}>• Friendliness:</Text>
      <Text style={tw`text-black`}>• Playfulness:</Text>
    </View>
  )
}
