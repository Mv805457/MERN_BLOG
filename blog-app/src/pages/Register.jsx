import React, { useState } from "react";
import API from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import "../styles/PageStyles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/users/register", { name, email, password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="page-center">
      <div className="form-wrapper fade">
        <h2>Create Account</h2>
        <p className="form-sub">Join the BlogApp community</p>

        <form onSubmit={submit} className="form-column">

          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          <button className="form-btn">Register</button>
        </form>

        <p className="form-alt">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

