import { useState, useEffect } from "react";
import "./Card.css";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading....</div>;

  return (
    <div className="Card">
      <h2>Users:</h2>
      {users.map((user) => (
        <ul key={user.id}>{user.name}</ul>
      ))}
    </div>
  );
}
