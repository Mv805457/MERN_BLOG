import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams, Link } from "react-router-dom";
import "../PageStyles.css";

export default function ViewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`/blogs/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">{blog.title}</h1>
        <p className="hero-subtitle">By {blog.author}</p>
      </div>

      <div className="content-section">
        <div className="card">
          <p className="full-text">{blog.content}</p>
          <Link to={`/edit/${blog._id}`} className="primary-btn">Edit Blog</Link>
        </div>
      </div>
    </div>
  );
}

