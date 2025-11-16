import React, { useState } from "react";
import API from "../api/axios";   // MUST BE API NOT axios
import "../PageStyles.css";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitBlog = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/blogs", {
        title,
        content,
      });

      alert("Blog created!");
      window.location.href = "/blogs";
    } catch (err) {
      console.error("Error creating blog:", err);
      alert("Failed to create blog");
    }
  };

  return (
    <div className="page-container">
      <h1>Create Blog</h1>

      <form className="form-card" onSubmit={submitBlog}>
        <input
          type="text"
          className="input-field"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="textarea-field"
          placeholder="Write your blog..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button className="primary-btn">Publish</button>
      </form>
    </div>
  );
}

