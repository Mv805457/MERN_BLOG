import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blogs")
      .then(res => setBlogs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container page">
      <h1 className="article-title">All Blogs</h1>
      <p className="article-meta">Browse all blog posts from our community.</p>

      {blogs.length === 0 ? (
        <p className="empty-text">No blog posts yet.</p>
      ) : (
        <div className="grid">
          {blogs.map(b => (
            <Link to={`/blogs/${b._id}`} key={b._id} className="card">
              <div style={{minHeight:120, background:"#f3f4f6", borderRadius:10}} />
              <h3 className="card-title">{b.title}</h3>
              <div className="card-meta">By {b.user?.name || "Unknown"} • {new Date(b.createdAt).toLocaleDateString()}</div>
              <p style={{color:"var(--muted)", marginTop:8}}>{b.content.substring(0,120)}...</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

