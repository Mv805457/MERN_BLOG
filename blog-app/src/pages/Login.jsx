import React, { useState } from "react";
import axios from "../api/axios";
import "../PageStyles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    await axios.post("/auth/login", { email, password });
    alert("Logged in!");
  };

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">Login</h1>
        <p className="hero-subtitle">Access your account</p>
      </div>

      <div className="content-section">
        <form className="form-card" onSubmit={loginUser}>
          <label>Email</label>
          <input className="input-field" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label>Password</label>
          <input type="password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button className="primary-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

