import { createStore } from "redux"
import { Provider } from "react-redux"
import { GeistProvider, CssBaseline } from "@geist-ui/core"
import reducers from "./reducers"
import { loadState, saveState } from "./storage"
import Password from "./components/password"
import PasswordList from "./components/password-list"

function App() {
  const persistedState = loadState()
  const store = createStore(reducers, persistedState)
  store.subscribe(() => saveState(store.getState()))

  return (
    <Provider store={store}>
      <GeistProvider>
        <CssBaseline />
        <div className="text-center">
          <Password />
          <PasswordList />
        </div>
      </GeistProvider>
    </Provider>
  )
}

export default App
