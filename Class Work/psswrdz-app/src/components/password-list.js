import React from "react"
import { useSelector } from "react-redux"
import { Table, Text } from "@geist-ui/core"

function PasswordList() {
  const passwords = useSelector((state) => state.passwords)

  return (
    <div className="flex-col mt-8">
      <Text h3>Saved Passwords</Text>
      <div className="flex">
        <div className="mx-auto">
          <Table data={passwords} width="600px">
            <Table.Column prop="name" label="name" />
            <Table.Column prop="password" label="password" />
          </Table>
        </div>
      </div>
    </div>
  )
}

export default PasswordList
