import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import useAxios from "./useAxios";

function App() {
  const { loading, data, error, refetch } = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json",
  });
  console.log(
    `Loading: ${loading}\nError: ${error}\nData: ${JSON.stringify(data)}`
  );
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default App;
