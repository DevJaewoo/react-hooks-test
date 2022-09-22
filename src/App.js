import logo from "./logo.svg";
import "./App.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (typeof onConfirm !== "function") return;
  if (typeof onCancel !== "function") return;

  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

function App() {
  const confirm = () => {
    console.log("Delete");
  };

  const abort = () => {
    console.log("Aborted");
  };
  const deleteTheWorld = useConfirm("Are you sure?", confirm, abort);

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={deleteTheWorld}>Delete the world</button>
    </div>
  );
}

export default App;
