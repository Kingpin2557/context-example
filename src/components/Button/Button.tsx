import "./button.css";

type ButtonType = {
  count: number;
  onClick: () => void;
};

function Button({ count, onClick }: ButtonType) {
  return (
    <button className="counter" onClick={onClick}>
      {count}
    </button>
  );
}

export default Button;
