import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  const sayHello = () => console.log("Hello!");
  useEffect(sayHello, [number]);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setAnumber(aNumber + 1)}>{aNumber}</button>
    </div>
  );
}

export default App;
