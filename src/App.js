import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (typeof onClick !== "function") return;

    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        console.log("unmount");
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return element;
};

function App() {
  const log = () => {
    console.log("HELLO!");
  };
  const title = useClick(log);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button ref={title}>ASD</button>
    </div>
  );
}

export default App;
