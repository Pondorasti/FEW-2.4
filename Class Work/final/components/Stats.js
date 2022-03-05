import { Text, View } from "react-native"
import tw from "twrnc"
import data from "../metal.json"

export default function Stats() {
  const count = data.length
  const fans = data.reduce((acc, cur) => acc + cur.fans, 0) * 1000
  const countries = data.reduce((acc, cur) => acc.add(cur.origin), new Set())
  const activeBands = data.reduce((acc, cur) => acc + (cur.split === "-" ? 1 : 0), 0)
  const styles = data.reduce((acc, cur) => {
    cur.style.split(",").forEach((style) => acc.add(style))
    return acc
  }, new Set())

  return (
    <View style={tw`bg-black h-full flex flex-col items-center justify-center`}>
      <Text style={tw`text-white font-bold text-3xl pb-2`}>Metal 🤘</Text>
      <Text style={tw`text-white font-semibold text-lg`}>
        Count: <Text style={tw`font-normal`}>{count}</Text>
      </Text>
      <Text style={tw`text-white font-semibold text-lg`}>
        Fans: <Text style={tw`font-normal`}>{Intl.NumberFormat().format(fans)}</Text>
      </Text>
      <Text style={tw`text-white font-semibold text-lg`}>
        Countries: <Text style={tw`font-normal`}>{countries.size}</Text>
      </Text>
      <Text style={tw`text-white font-semibold text-lg`}>
        Active: <Text style={tw`font-normal`}>{activeBands}</Text>
      </Text>
      <Text style={tw`text-white font-semibold text-lg`}>
        Split: <Text style={tw`font-normal`}>{count - activeBands}</Text>
      </Text>
      <Text style={tw`text-white font-semibold text-lg`}>
        Styles: <Text style={tw`font-normal`}>{styles.size}</Text>
      </Text>
    </View>
  )
}
