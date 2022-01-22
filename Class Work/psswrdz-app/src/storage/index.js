const PASSWRDZ_STATE = "PASSWRDZ_STATE"

export const loadState = () => {
  try {
    const serializedStorage = localStorage.getItem(PASSWRDZ_STATE)
    if (serializedStorage === null) return undefined

    return JSON.parse(serializedStorage)
  } catch (err) {
    console.log("Error retrieving data: ", err)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PASSWRDZ_STATE, serializedState)
  } catch (err) {
    console.log("Error saving data: ", err)
  }
}
