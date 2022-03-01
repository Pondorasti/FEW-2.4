import { Modal, View, Text, Pressable, TextInput } from "react-native"
import { useDispatch } from "react-redux"
import { useState } from "react"
import tw from "twrnc"
import { addPassword, editPassword } from "../actions"

export default function EditPassword({ visible, onClose, inputName, inputPassword, index }) {
  const [name, onChangeName] = useState(inputName || "")
  const [password, onChangePassword] = useState(inputPassword || "")

  const inputStyle = tw`p-2 text-black border border-gray-200 rounded-lg font-500 text-lg`

  const dispatch = useDispatch()

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={tw`bg-gray-200 py-2 h-full`}>
        <Text style={tw`text-2xl font-semibold m-4`}>
          {index === undefined ? "Create Password" : "Update Password"}
        </Text>
        <View style={tw`my-2 mx-4 p-3 bg-gray-50 rounded-xl`}>
          <TextInput
            style={inputStyle}
            onChangeText={onChangeName}
            value={name}
            placeholder="Website Name"
          />
        </View>
        <View style={tw`my-2 mx-4 p-3 bg-gray-50 rounded-xl`}>
          <TextInput
            style={inputStyle}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <Pressable
          style={tw`my-2 mx-4 p-3 bg-green-500 rounded-xl`}
          onPress={() => {
            if (index === undefined) {
              dispatch(addPassword(name, password))
            } else {
              dispatch(editPassword(index, name, password))
            }
            onClose()
          }}
        >
          <Text style={tw`font-500 text-lg text-white text-center`}>Save</Text>
        </Pressable>
        <Pressable style={tw`my-2 mx-4 p-3 bg-gray-50 rounded-xl`} onPress={onClose}>
          <Text style={tw`font-500 text-lg text-black text-center`}>Cancel</Text>
        </Pressable>
      </View>
    </Modal>
  )
}
