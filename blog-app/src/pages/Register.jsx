import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/PageStyles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function registerUser(e) {
    e.preventDefault();
    try {
      const res = await API.post("/users/register", { name, email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-box">
        <h1 className="auth-title">Create Account</h1>
        <p className="auth-sub">Join the blog community </p>

        <form onSubmit={registerUser} className="auth-form">
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="auth-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="auth-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

