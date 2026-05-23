"use client";

import { useState } from "react";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [access, setAccess] = useState(false);

  const handleLogin = () => {
    if (password === "9419166095") {
      setAccess(true);
    } else {
      alert("Wrong Password");
    }
  };

  if (!access) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome Admin - Sangam Impex</h1>
      <p>Customer data yaha show hoga</p>
    </div>
  );
}