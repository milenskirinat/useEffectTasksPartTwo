import { useState, useEffect } from "react";
import "./Card.css";

export default function FakePage() {
  const [loading, setLoading] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const handleClick = () => {
    setLoading(`Loading...`);
    setIsLoaded(false);
  };

  useEffect(() => {
    if (loading === "Loading...") {
      const timer = setTimeout(() => {
        setLoading("Welcome to the page");
        setIsLoaded(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [loading]);
  return (
    <div className="Card">
      <button onClick={handleClick}>Show the page</button>
      <p>{loading}</p>
    </div>
  );
}
