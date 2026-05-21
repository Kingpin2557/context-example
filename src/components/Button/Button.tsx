import "./button.css";

type ButtonType = {
  count: number;
  addCount: () => void;
};

function Button({ count, addCount }: ButtonType) {
  return (
    <button className="counter" onClick={addCount}>
      {count}
    </button>
  );
}

export default Button;
