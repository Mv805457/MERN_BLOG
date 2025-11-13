import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../api/axios";

export default function BlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/blogs/${id}`).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) return <div className="page">Loading...</div>;

  return (
    <>
      {/* HERO */}
      <div className="hero-bg">
        <div className="page">
          <h1 className="hero-title">{blog.title}</h1>
          <p className="hero-sub">By {blog.user?.name || "Unknown"}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="page-content">
        <div
          style={{
            background: "white",
            padding: "32px",
            borderRadius: "14px",
            border: "1px solid var(--border)",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          {blog.content}
        </div>

        <Link
          to={`/edit/${blog._id}`}
          style={{
            marginTop: "20px",
            display: "inline-block",
          }}
        >
          <button className="hero-btn">Edit Blog</button>
        </Link>
      </div>
    </>
  );
}

