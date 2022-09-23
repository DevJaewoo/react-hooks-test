import "./App.css";
import { useRef, useState, useEffect } from "react";

//callback을 받아 네트워크가 변경됐을 때 callback 호출, state 변경
const useNetwork = (callback) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handler = () => {
    if (typeof callback === "function") {
      callback(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handler);
    window.addEventListener("offline", handler);
    return () => {
      window.removeEventListener("offline", handler);
      window.removeEventListener("online", handler);
    };
  }, []);

  return status;
};

function App() {
  const status = useNetwork((value) => {
    console.log(`network changed: ${value}`);
  });

  return (
    <div className="App">
      <h1>Hello</h1>
      <p>{status ? "Online" : "Offline"}</p>
    </div>
  );
}

export default App;
