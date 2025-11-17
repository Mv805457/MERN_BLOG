import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api/axios";
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
      window.location.reload();
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="page-center">
      <h1 className="section-title">Welcome Back</h1>
      <p className="subtext">Login to your account</p>

      <form style={{ marginTop: "30px" }} onSubmit={loginUser}>
        <input className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

        <input className="input" placeholder="Password" type="password"
          onChange={(e) => setPassword(e.target.value)} />

        <button className="btn" style={{ width: "100%" }}>Login</button>

        <p className="subtext" style={{ marginTop: "10px" }}>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

