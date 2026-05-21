import { useContext } from "react";
import "./box.css";
import { CountContext } from "../../contexts/CountContext";

function Box() {
  const { count } = useContext(CountContext);
  return <div>{count}</div>;
}

export default Box;
