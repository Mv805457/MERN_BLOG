import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/PageStyles.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/users/register", { name, email, password });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data));

      navigate("/");
      window.location.reload();
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="page-center">
      <h1 className="section-title">Register</h1>
      <p className="subtext">Create your account</p>

      <form style={{ marginTop: "30px" }} onSubmit={registerUser}>
        <input className="input" placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <input className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input className="input" placeholder="Password" type="password"
          onChange={(e) => setPassword(e.target.value)} />

        <button className="btn" style={{ width: "100%" }}>Register</button>
      </form>
    </div>
  );
}

