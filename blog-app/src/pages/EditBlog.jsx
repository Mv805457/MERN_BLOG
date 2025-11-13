import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import "../PageStyles.css";

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`/blogs/${id}`).then((res) => {
      setTitle(res.data.title);
      setContent(res.data.content);
    });
  }, [id]);

  const updateBlog = async (e) => {
    e.preventDefault();
    await axios.put(`/blogs/${id}`, { title, content });
    alert("Blog updated!");
  };

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">Edit Blog</h1>
        <p className="hero-subtitle">Update and republish your thoughts.</p>
      </div>

      <div className="content-section">
        <form className="form-card" onSubmit={updateBlog}>
          <label>Title</label>
          <input className="input-field" value={title} onChange={(e) => setTitle(e.target.value)} />

          <label>Content</label>
          <textarea className="textarea-field" value={content} onChange={(e) => setContent(e.target.value)} />

          <button className="primary-btn">Update Blog</button>
        </form>
      </div>
    </div>
  );
}

