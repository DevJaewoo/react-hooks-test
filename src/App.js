import logo from "./logo.svg";
import "./App.css";
import { useInput } from "./useInput.js";

function App() {
  const validator = (value) => {
    return value.length <= 10;
  };
  const name = useInput("Mr.", validator);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
