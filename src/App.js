import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useRef } from "react";

const useBeforeLeave = (callback) => {
  const handle = (event) => {
    if (event.clientY <= 0) {
      callback();
    }
  };

  useEffect(() => {
    if (typeof callback !== "function") return;
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function App() {
  const event = () => console.log("Hello!");
  useBeforeLeave(event);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
