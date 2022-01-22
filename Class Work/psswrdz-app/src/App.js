import { createStore } from "redux"
import { Provider } from "react-redux"
import { GeistProvider, CssBaseline } from "@geist-ui/core"
import reducers from "./reducers"
import "./App.css"
import Password from "./password"
import PasswordList from "./password-list"

function App() {
  const store = createStore(reducers)
  return (
    <Provider store={store}>
      <GeistProvider>
        <CssBaseline />
        <div className="App">
          <Password />
          <PasswordList />
        </div>
      </GeistProvider>
    </Provider>
  )
}

export default App
