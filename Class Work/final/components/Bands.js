import { Text, View, FlatList } from "react-native"
import tw from "twrnc"
import data from "../metal.json"

function Item({ band }) {
  return (
    <View style={tw`bg-black p-2`}>
      <View style={tw`flex flex-row flex-nowrap items-center`}>
        <Text style={tw`text-base text-white font-semibold`}>{band.band_name}</Text>
        <View style={tw`flex-grow`}></View>
        <Text style={tw`text-base text-gray-400`}>{band.origin}</Text>
      </View>
      <View style={tw`flex flex-row flex-nowrap items-center`}>
        <Text style={tw`text-base text-white font-semibold`}>{band.band_name}</Text>
        <View style={tw`flex-grow`}></View>
        <Text style={tw`text-white`}>{Intl.NumberFormat().format(band.fans)}</Text>
      </View>
    </View>
  )
}

function Separator() {
  return <View style={tw`border-b border-gray-800 bg-black`} />
}

export default function Bands() {
  console.log(data)
  return (
    <FlatList
      style={tw`bg-gray-200`}
      data={data}
      renderItem={({ item }) => <Item band={item} />}
      keyExtractor={(item) => item.ID}
      ItemSeparatorComponent={Separator}
    />
  )
}
