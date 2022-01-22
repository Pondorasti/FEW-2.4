import { createStore } from "redux"
import { Provider } from "react-redux"
import { GeistProvider, CssBaseline } from "@geist-ui/core"
import reducers from "./reducers"
import Password from "./components/password"
import PasswordList from "./components/password-list"

function App() {
  const store = createStore(reducers)
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
