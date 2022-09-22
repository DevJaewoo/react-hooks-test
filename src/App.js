import logo from "./logo.svg";
import "./App.css";

const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
};

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}

export default App;
