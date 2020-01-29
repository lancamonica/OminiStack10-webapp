import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  function desincrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
      <button onClick={desincrementCounter}>Desincrementar</button>
    </>
  );
}

export default App;
