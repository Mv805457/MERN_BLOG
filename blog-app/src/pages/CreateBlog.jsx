import React, { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/PageStyles.css";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/blogs", { title, content });
      navigate("/blogs");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div className="container page">
      <h1 className="section-title">Create Blog</h1>

      <form className="form-card" onSubmit={submit}>
        <input className="input" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <textarea className="input" placeholder="Write your blog..." value={content} onChange={e=>setContent(e.target.value)} required />
        <div style={{display:"flex",justifyContent:"flex-end",gap:12}}>
          <button type="submit" className="btn btn-primary">Publish</button>
        </div>
      </form>
    </div>
  );
}

