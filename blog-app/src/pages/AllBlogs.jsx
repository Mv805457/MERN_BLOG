import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import "../PageStyles.css";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="page-container">
      
      {/* HERO SECTION */}
      <div className="hero-section">
        <h1 className="hero-title">All Blogs</h1>
        <p className="hero-subtitle">
          Browse all blog posts from our community.
        </p>
      </div>

      {/* CONTENT */}
      <div className="content-section">
        {blogs.length === 0 ? (
          <p className="empty-text">No blogs available.</p>
        ) : (
          <div className="blog-list">
            {blogs.map((blog) => (
              <Link 
                key={blog._id} 
                to={`/blogs/${blog._id}`} 
                className="card"
              >
                <h2 className="card-title">{blog.title}</h2>
                <p className="card-body">
                  {blog.content.substring(0, 120)}...
                </p>
                <span className="card-link">Read More →</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

