import { useContext } from "react";
import "./button.css";
import { CountContext } from "../../contexts/CountContext";

function Button() {
  const { count, addCount } = useContext(CountContext);
  return (
    <button className="counter" onClick={() => addCount()}>
      {count}
    </button>
  );
}

export default Button;
