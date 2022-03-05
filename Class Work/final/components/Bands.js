import { Text, View, FlatList } from "react-native"
import tw from "twrnc"
import data from "../metal.json"

function Item({ band }) {
  return (
    <View style={tw`bg-black p-2`}>
      <View style={tw`flex flex-row flex-nowrap items-center`}>
        <Text
          style={tw.style(
            "text-base font-semibold",
            band.split === "-" ? "text-white" : "text-gray-500 line-through"
          )}
        >
          {band.band_name}
        </Text>
        <View style={tw`flex-grow`}></View>
        <Text style={tw`text-base text-gray-400`}>{band.origin}</Text>
      </View>
      <View style={tw`flex flex-row flex-nowrap items-center pt-1`}>
        <Text style={tw`text-white`}>{band.formed}</Text>
        <View style={tw`flex-grow`}></View>
        <Text style={tw`text-white`}>{Intl.NumberFormat().format(band.fans * 1000)}</Text>
      </View>
    </View>
  )
}

function Separator() {
  return <View style={tw`border-b border-gray-800 bg-black`} />
}

export default function Bands() {
  return (
    <FlatList
      style={tw`bg-black`}
      data={data}
      renderItem={({ item }) => <Item band={item} />}
      keyExtractor={(item) => item.ID}
      ItemSeparatorComponent={Separator}
    />
  )
}
