import React, { useState } from "react";
import axios from "../api/axios";
import "../PageStyles.css";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitBlog = async (e) => {
    e.preventDefault();
    await axios.post("/blogs", { title, content });
    alert("Blog created!");
  };

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">Create New Blog</h1>
        <p className="hero-subtitle">Write and publish your story.</p>
      </div>

      <div className="content-section">
        <form className="form-card" onSubmit={submitBlog}>
          <label>Title</label>
          <input className="input-field" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>Content</label>
          <textarea className="textarea-field" value={content} onChange={(e) => setContent(e.target.value)} />

          <button className="primary-btn">Publish Blog</button>
        </form>
      </div>
    </div>
  );
}

