import { useState, useEffect } from "react";
import "./Card.css";

export default function AutoTimer() {
  const [counter, setCounter] = useState(0);

  const tick = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    const intervalId = setInterval(tick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="Card">
      <p>Automatic counter: {counter}</p>
    </div>
  );
}
