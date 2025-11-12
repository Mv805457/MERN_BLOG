import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/users/register", { name, email, password });
      login(data.token);
      setMsg("Registered successfully!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="border p-2 w-full rounded" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="border p-2 w-full rounded" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="border p-2 w-full rounded" />
        <button className="bg-black text-white w-full py-2 rounded">Register</button>
        {msg && <p className="text-center text-sm text-gray-500">{msg}</p>}
      </form>
    </div>
  );
}

