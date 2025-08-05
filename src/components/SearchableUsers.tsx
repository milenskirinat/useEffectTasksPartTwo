import "./Card.css";
import { useState, useEffect } from "react";

export default function SearchableUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = users.filter((user) => {
      return user.name.toLowerCase().includes(query.toLowerCase());
    });

    setFilteredUsers(filtered);
  }, [query, users]);

  if (loading) return <div>Loading....</div>;

  return (
    <div className="Card">
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name"
      />
      {filteredUsers.map((user) => (
        <ul key={user.id}>{user.name}</ul>
      ))}
    </div>
  );
}
