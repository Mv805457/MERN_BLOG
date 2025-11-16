import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../PageStyles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const loginUser = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post("/users/login", { email, password });

    // Save CORRECT values
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    alert("Logged in successfully!");
    navigate("/");
  } catch (error) {
    alert(error.response?.data?.message || "Login failed");
  }
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
          <input 
            type="email"
            className="input-field" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input 
            type="password" 
            className="input-field" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="primary-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
