import { useState, useEffect } from "react";
import "./Card.css";

export default function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Card">
      <p>Width: {width}px</p>
    </div>
  );
}
