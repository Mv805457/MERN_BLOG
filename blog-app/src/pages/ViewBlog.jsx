import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/axios";
import "../styles/PageStyles.css";

export default function ViewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/blogs/${id}`).then(res => setBlog(res.data)).catch(err => console.error(err));
  }, [id]);

  if(!blog) return <div className="container page"><p className="empty-text">Loading...</p></div>;

  return (
    <div className="container page">
      <div className="article-wrap">
        <h1 className="article-title">{blog.title}</h1>
        <div className="article-meta">By {blog.user?.name || "Unknown"} • {new Date(blog.createdAt).toLocaleDateString()}</div>

        <div className="article-body">
          {blog.content}
        </div>

        <div style={{marginTop:16}}>
          <Link to={`/edit/${blog._id}`} className="btn btn-ghost">Edit Post</Link>
        </div>
      </div>
    </div>
  );
}

