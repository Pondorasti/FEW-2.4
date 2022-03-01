import { ADD_PASSWORD, EDIT_PASSWORD, DELETE_PASSWORD } from "../actions"

const passwordReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      const { name, password } = action.payload
      return [...state, { name, password }]

    case EDIT_PASSWORD:
      return state.map((item, index) => {
        if (index !== action.payload.index) return item

        return { ...item, ...action.payload }
      })

    case DELETE_PASSWORD:
      const { index } = action.payload
      return [...state.slice(0, index), ...state.slice(index + 1)]

    default:
      return state
  }
}

export default passwordReducer
