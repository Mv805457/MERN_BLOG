import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import "../PageStyles.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch user profile
    axios.get("/users/profile")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Failed to fetch profile:", err));

    // Fetch user's blogs
    axios.get("/blogs")
      .then((res) => {
        // Filter blogs by current user
        const userBlogs = res.data.filter(blog => 
          blog.user?._id === JSON.parse(localStorage.getItem("user") || "{}")._id
        );
        setBlogs(userBlogs);
      })
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  if (!user) {
    return (
      <div className="page-container">
        <div className="content-section">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">My Profile</h1>
        <p className="hero-subtitle">Your information and your blog posts.</p>
      </div>

      <div className="content-section">
        <div className="card">
          <h2 className="card-title">{user.name}</h2>
          <p className="card-body">{user.email}</p>
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "40px", marginBottom: "20px" }}>
          My Blogs
        </h2>

        {blogs.length === 0 ? (
          <p className="empty-text">You haven't created any blogs yet.</p>
        ) : (
          <div className="blog-list">
            {blogs.map((blog) => (
              <Link key={blog._id} to={`/blogs/${blog._id}`} className="card">
                <h3 className="card-title">{blog.title}</h3>
                <p className="card-body">{blog.content.substring(0, 100)}...</p>
                <span className="card-link">Read More →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
