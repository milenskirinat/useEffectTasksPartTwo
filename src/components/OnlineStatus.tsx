import "./Card.css";
import { useState, useEffect } from "react";

export default function OnlineStatus() {
  const [isonline, setIsOnline] = useState(true);

  useEffect(() => {
    console.log("Компонет загрузился");

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleOnline = () => {
    console.log("Wow, tenés internet, muy bien");
    setIsOnline(true);
  };

  const handleOffline = () => {
    console.log("No tienes INTERNET amigo");
    setIsOnline(false);
  };

  return (
    <div className="Card">
      <p>Статус: {isonline ? "Онлайн" : "Офлайн"}</p>
    </div>
  );
}
