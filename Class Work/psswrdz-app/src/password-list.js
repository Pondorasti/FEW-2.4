import React from "react"
import { useSelector } from "react-redux"

function PasswordList() {
  const passwords = useSelector((state) => state.passwords)

  return (
    <div>
      {passwords.map(({ name, password }, index) => (
        <div key={index}>
          name: {name}; password: {password}
        </div>
      ))}
    </div>
  )
}

export default PasswordList
