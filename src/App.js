import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";

const useBeforeLeave = (callback) => {
  const ref = useRef();
  const handle = (event) => {
    if (event.clientY <= 0 || true) {
      callback();
    }
  };

  useEffect(() => {
    if (typeof callback !== "function") return;
    ref.current.addEventListener("mouseleave", handle);
    return () => ref.current.removeEventListener("mouseleave", handle);
  }, []);

  return ref;
};

function App() {
  const event = () => console.log("Hello!");
  const ref = useBeforeLeave(event);
  return (
    <div className="App">
      <h1 ref={ref}>Hello</h1>
    </div>
  );
}

export default App;
