import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/PageStyles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", { email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
    } catch (err) {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card fade-in">
        <h2>Welcome Back </h2>
        <p className="auth-sub">Login to your account</p>

        <form onSubmit={loginUser}>
          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="auth-btn">Login</button>
        </form>

        <p className="auth-bottom">
          Don’t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

