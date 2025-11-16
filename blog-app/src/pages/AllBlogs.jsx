import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import "../PageStyles.css";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/blogs")
      .then(res => setBlogs(res.data))
      .catch(err => console.log("Failed to fetch blogs:", err));
  }, []);

  return (
    <div className="page-container">

      {/* PAGE HEADER */}
      <div className="page-header">
        <h1 className="page-title">All Blogs</h1>
        <p className="page-sub">Browse all blog posts from our community.</p>
      </div>

      {/* BLOG LIST */}
      <div className="blog-list">
        {blogs.length === 0 && (
          <p className="empty-text">No blogs found.</p>
        )}

        {blogs.map(blog => (
          <Link to={`/blogs/${blog._id}`} key={blog._id} className="card">
            <h2 className="card-title">{blog.title}</h2>
            <p className="card-body">{blog.content.slice(0, 120)}...</p>

            <span className="card-link">Read More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

