import { useState, useEffect } from "react";
import "./Card.css";

export default function GreetingDelay() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const changeName = () => {
    setGreeting(name);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      changeName();
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);
  return (
    <div className="Card">
      <p>Привет: {greeting}</p>
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />
    </div>
  );
}
