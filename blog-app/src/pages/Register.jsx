import React, { useState } from "react";
import axios from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../PageStyles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/users/register", { name, email, password });
      // Store token
localStorage.setItem("token", res.data.token);
localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Registered successfully!");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">Register</h1>
        <p className="hero-subtitle">Create your account</p>
      </div>

      <div className="content-section">
        <form className="form-card" onSubmit={registerUser}>
          <label>Name</label>
          <input 
            className="input-field" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <button className="primary-btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
