import { useState } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import Box from "./components/Box/Box";
import { CountContext } from "./contexts/CountContext";

function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <h1>Vite + React</h1>

      <CountContext value={{ count, addCount }}>
        <Button />
        <Box />
      </CountContext>
    </div>
  );
}

export default App;
