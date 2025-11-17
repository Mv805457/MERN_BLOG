import React, { useState } from "react";
import API from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/PageStyles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/login", { email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch {
      alert("Invalid login");
    }
  };

  return (
    <div className="page-center">
      <div className="form-wrapper fade">
        <h2>Welcome Back</h2>
        <p className="form-sub">Log in to your account</p>

        <form onSubmit={submit} className="form-column">

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="form-btn">Login</button>
        </form>

        <p className="form-alt">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

