import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import BuyCake from "./Components/BuyCake";
import BuyCakeHooks from "./Components/BuyCakeHooks";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BuyCake />
        <BuyCakeHooks />
      </div>
    </Provider>
  );
}

export default App;
