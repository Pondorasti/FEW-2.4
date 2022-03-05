import { Text, View, FlatList } from "react-native"
import tw from "twrnc"
import data from "../metal.json"

function Item({ name }) {
  return (
    <View style={tw`bg-black py-3 px-2`}>
      <Text style={tw`text-base text-white font-semibold`}>{name}</Text>
    </View>
  )
}

function Separator() {
  return <View style={tw`border-b border-gray-800 bg-black`} />
}

export default function Styles() {
  const styles = Array.from(
    data.reduce((acc, cur) => {
      cur.style.split(",").forEach((style) => acc.add(style))
      return acc
    }, new Set())
  )

  return (
    <FlatList
      style={tw`bg-gray-200`}
      data={styles}
      renderItem={({ item }) => <Item name={item} />}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={Separator}
    />
  )
}
