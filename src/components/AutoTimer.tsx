import { useState, useEffect } from "react";

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
    <div>
      <p>Automatic counter: {counter}</p>
    </div>
  );
}
