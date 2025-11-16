import React, { useEffect, useState } from "react";
import API from "../api/axios";   // FIXED — must be API
import { Link } from "react-router-dom";
import "../PageStyles.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile (needs token)
        const res = await API.get("/users/profile");
        setUser(res.data);

        // Fetch ALL blogs
        const blogRes = await API.get("/blogs");
        
        // Filter only user's blogs
        const userId = res.data._id;
        const userBlogs = blogRes.data.filter(
          (blog) => blog.user?._id === userId
        );

        setBlogs(userBlogs);

      } catch (err) {
        console.error("Profile Error:", err.response?.data || err);
        alert("Failed to load profile. Please login again.");
      }
    };

    fetchData();
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
        <p className="hero-subtitle">Your info & your blogs</p>
      </div>

      <div className="content-section">
        <div className="card">
          <h2 className="card-title">{user.name}</h2>
          <p className="card-body">{user.email}</p>
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: 700, marginTop: "40px" }}>
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

