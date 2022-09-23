import "./App.css";
import { useRef, useState, useEffect } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") return;
    const { current } = element;
    current.style.transition = `opacity ${duration}s ease-in-out`;
    current.style.transitionDelay = `${delay}s`;
    current.style.opacity = 1;
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

function App() {
  return (
    <div className="App">
      <h1 {...useFadeIn(2, 2)}>Hello</h1>
      <p {...useFadeIn(10)}>asdasd</p>
    </div>
  );
}

export default App;
