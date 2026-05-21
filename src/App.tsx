import { useState } from "react";

import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  function addCount(count: number) {
    ++count;

    setCount(count);
  }

  return (
    <div className="container">
      <h1>Vite + React</h1>
      <Button addCount={() => addCount(count)} count={count} />
    </div>
  );
}

export default App;
