import { Modal, View, Text, Pressable, TextInput } from "react-native"
import { useDispatch } from "react-redux"
import { useState } from "react"
import tw from "twrnc"
import { addPassword } from "../actions"

export default function EditPassword({ visible, onClose }) {
  const [name, onChangeName] = useState("")
  const [password, onChangePassword] = useState("")

  const inputStyle = tw`mt-4 p-2 text-md text-black border border-gray-200 rounded-lg`

  const dispatch = useDispatch()

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={tw`flex flex-1 items-center m-8`}>
        <Text style={tw`text-2xl font-semibold`}>Create Password</Text>
        <View style={tw`mt-4`}>
          <TextInput
            style={inputStyle}
            onChangeText={onChangeName}
            value={name}
            placeholder="Website Name"
          />
          <TextInput
            style={inputStyle}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View style={tw`flex flex-row flex-nowrap w-full mt-8`}>
          <Pressable style={tw`p-3 bg-gray-200 rounded-lg w-1/2 mr-2`} onPress={onClose}>
            <Text style={tw`text-black text-center`}>Cancel</Text>
          </Pressable>
          <Pressable
            style={tw`p-3 bg-green-500 rounded-lg w-1/2 ml-2`}
            onPress={() => {
              dispatch(addPassword(name, password))
              onClose()
            }}
          >
            <Text style={tw`text-white text-center`}>Create Password</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}
