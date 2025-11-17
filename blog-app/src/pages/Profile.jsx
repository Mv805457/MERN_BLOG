import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/users/profile")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Failed to fetch profile:", err));

    API.get("/blogs")
      .then((res) => {
        const userID = JSON.parse(localStorage.getItem("user") || "{}")._id;
        setBlogs(res.data.filter((b) => b.user?._id === userID));
      })
      .catch((err) => console.error("Failed to fetch blogs:", err));
  }, []);

  if (!user) return <p className="loading-text">Loading...</p>;

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div className="profile-avatar">
          {user.name[0].toUpperCase()}
        </div>
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-email">{user.email}</p>
      </div>

      <h2 className="profile-section-title">My Blogs</h2>

      {blogs.length === 0 ? (
        <p className="empty-profile-text">You haven't created any blogs yet.</p>
      ) : (
        <div className="profile-blog-list">
          {blogs.map((blog) => (
            <Link key={blog._id} to={`/blogs/${blog._id}`} className="profile-blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.content.substring(0, 90)}...</p>
              <span>Read More →</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

