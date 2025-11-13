import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "../PageStyles.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/auth/profile").then((res) => setUser(res.data));
    axios.get("/blogs/myblogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">My Profile</h1>
        <p className="hero-subtitle">Your information and your blog posts.</p>
      </div>

      <div className="content-section">
        <div className="card">
          <h2 className="card-title">{user?.name}</h2>
          <p className="card-body">{user?.email}</p>
        </div>

        <h2 className="section-title">My Blogs</h2>

        {blogs.map((blog) => (
          <div className="card" key={blog._id}>
            <h3 className="card-title">{blog.title}</h3>
            <p className="card-body">{blog.content.substring(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

