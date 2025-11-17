import { Link } from "react-router-dom";
import API from "../api/axios";
import { useEffect, useState } from "react";
import "../styles/PageStyles.css";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blogs").then((res) => setBlogs(res.data));
  }, []);

  return (
    <div className="page">
      <h1 className="section-title" style={{ textAlign: "center" }}>All Blogs</h1>
      <p className="subtext" style={{ textAlign: "center", marginBottom: "40px" }}>
        Browse all blog posts from our community.
      </p>

      <div style={{ maxWidth: "750px", margin: "0 auto" }}>
        {blogs.map((blog) => (
          <Link
            key={blog._id}
            to={`/blogs/${blog._id}`}
            className="card"
            style={{
              textDecoration: "none",
              color: "inherit",
              marginBottom: "25px",
              display: "block",
            }}
          >
            <h2 style={{ marginBottom: "8px" }}>{blog.title}</h2>

            <p className="subtext" style={{ marginBottom: "12px" }}>
              By {blog.user?.name || "Unknown"} •{" "}
              {new Date(blog.createdAt).toLocaleDateString()}
            </p>

            <p style={{ fontSize: "16px", color: "#444" }}>
              {blog.content.substring(0, 120)}...
            </p>
          </Link>
        ))}

        {blogs.length === 0 && (
          <p className="subtext" style={{ textAlign: "center", marginTop: "40px" }}>
            No blogs yet.
          </p>
        )}
      </div>
    </div>
  );
}

