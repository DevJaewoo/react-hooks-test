import "./App.css";
import { useRef, useState, useEffect } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ y: 0, x: 0 });

  const handler = () => {
    setScroll({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return scroll;
};

function App() {
  const { y } = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{ color: y > 100 ? "red" : "blue", position: "fixed" }}>
        Hello
      </h1>
    </div>
  );
}

export default App;
