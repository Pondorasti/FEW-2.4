import React, { useState } from "react"
import { useDispatch } from "react-redux"
import zxcvbn from "zxcvbn"
import { Text, Button, Input, Checkbox, useInput } from "@geist-ui/core"
import { addPassword } from "./actions"

function generatePassword(useHyphens) {
  function randomInRange(start = 33, end = 128) {
    return Math.floor(Math.random() * (end - start)) + start
  }

  let ans = ""
  for (let i = 0; i < 9; ++i) {
    ans += String.fromCharCode(randomInRange())
    if ((i === 2 || i === 5) && useHyphens) ans += "-"
  }

  return ans
}

function Password() {
  const dispatch = useDispatch()
  const { state: name, bindings: nameBindings } = useInput("")
  const { state: password, setState: setPassword, bindings: passwordBindings } = useInput("")
  const [useHyphens, setUseHyphens] = useState(true)

  console.log(zxcvbn(password))

  return (
    <div className="flex-col space-y-4 max-w-xs mx-auto">
      <Text h3>Generate new password</Text>
      <div>
        <Input label="Name" width="100%" {...nameBindings} />
      </div>
      <div className="flex-col">
        <Input.Password label="Password" width="100%" {...passwordBindings} />
        <div>
          <Checkbox checked={useHyphens} onChange={() => setUseHyphens(!useHyphens)} />
          <Text small>Use hyphens</Text>
        </div>
      </div>

      {/* {zxcvbn(password)} */}

      <div className="flex-col space-y-2">
        <div>
          <Button type="secondary" onClick={() => setPassword(generatePassword(useHyphens))}>
            Generate
          </Button>
        </div>

        <div>
          <Button type="success" onClick={() => dispatch(addPassword(name, password))}>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Password
