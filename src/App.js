import "./App.css";
import { useRef, useState, useEffect } from "react";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    console.log("This browser does not support notification");
    return;
  }

  const notify = () => {
    if (Notification.permission === "granted") {
      console.log("granted");
      new Notification(title, options);
    } else {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        } else {
          return;
        }
      });
    }
  };

  return notify;
};

function App() {
  const notify = useNotification("Hello?", { body: "Hello" });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>Hello</h1>
      <button onClick={notify}>button</button>
    </div>
  );
}

export default App;
