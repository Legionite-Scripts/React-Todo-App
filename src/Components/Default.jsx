import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export const Default = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query)
    );

    setFilteredUsers(filtered);
  };

  return (
    <Container fluid id="main">
      <h2 style={{ color: "#fff" }} className="display-6">User Search</h2>
      <input
        type="text"
        placeholder="Search by name or username"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name} - <strong>City:</strong>{" "}
            {user.address.city} - <strong>Username:</strong> {user.username}
          </li>
        ))}
      </ul>
    </Container>
  );
};
