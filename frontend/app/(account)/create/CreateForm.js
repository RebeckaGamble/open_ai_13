"use client";
import { useState } from "react";
export default function CreateUser() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleCreateUser() {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newUser = { id, username, password };
    setUsers([...users, newUser]);
    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      console.log(data);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
    setUsername("");
    setPassword("");
  }

  return (
    <div>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
}
