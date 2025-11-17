import { Link } from "react-router-dom";
import API from "../api/axios";
import { useEffect, useState } from "react";
import "../styles/PageStyles.css";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState(""); // ⭐ ADDED

  useEffect(() => {
    API.get("/blogs")
      .then((res) => setBlogs(res.data))
      .catch(() => {});
  }, []);

  // ⭐ FILTER BLOGS BY TITLE, CONTENT, TAGS
  const filteredBlogs = blogs.filter((b) => {
    const q = search.toLowerCase();
    return (
      b.title.toLowerCase().includes(q) ||
      b.content.toLowerCase().includes(q) ||
      b.tags?.some((tag) => tag.toLowerCase().includes(q))
    );
  });

  return (
    <div className="page">
      <div className="container">
        <h1 className="section-title" style={{ textAlign: "center" }}>
          All Blogs
        </h1>
        <p className="subtext" style={{ textAlign: "center", marginBottom: 24 }}>
          Browse posts from the community
        </p>

        {/* ⭐ SEARCH BAR */}
        <input
          type="text"
          placeholder="Search blogs by title, content or tags..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
          style={{
            maxWidth: 860,
            margin: "0 auto 20px auto",
            display: "block",
          }}
        />

        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          {filteredBlogs.length === 0 && (
            <p className="empty-text">No matching posts.</p>
          )}

          {filteredBlogs.map((b) => (
            <Link
              key={b._id}
              to={`/blogs/${b._id}`}
              className="card"
              style={{ display: "block", marginBottom: 16 }}
            >
              <h3 className="card-title">{b.title}</h3>
              <div className="card-meta">
                By {b.user?.name || "Unknown"} •{" "}
                {new Date(b.createdAt).toLocaleDateString()}
              </div>
              <p style={{ marginTop: 8, color: "#444" }}>
                {b.content.substring(0, 140)}...
              </p>

              {/* ⭐ TAGS */}
              {b.tags?.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "6px",
                    flexWrap: "wrap",
                    marginTop: 10,
                  }}
                >
                  {b.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        background: "#f3f4f6",
                        padding: "3px 8px",
                        borderRadius: "10px",
                        fontSize: "12px",
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

