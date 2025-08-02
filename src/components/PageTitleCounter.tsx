import { useState, useEffect } from "react";
import "./Card.css";

export default function PageTitleCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Sum of button: ${counter}`;
  }, [counter]);
  return (
    <div className="Card">
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Увеличить</button>
    </div>
  );
}
