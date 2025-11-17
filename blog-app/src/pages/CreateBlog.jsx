import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import "../styles/PageStyles.css";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const navigate = useNavigate();

  const addTag = (e) => {
    e.preventDefault();
    if (!tagInput.trim()) return;
    setTags([...tags, tagInput.trim()]);
    setTagInput("");
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/blogs", { title, content, tags });
      navigate(`/blogs/${res.data._id}`);
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div className="page-center">
      <div className="form-wrapper fade">
        <h2 style={{ textAlign: "center", marginBottom: 8 }}>Create Blog</h2>
        <p className="subtext" style={{ textAlign: "center", marginBottom: 18 }}>
          Write something great
        </p>

        <form onSubmit={submit} className="form-row">
          <label className="form-label">Title</label>
          <input className="form-input" value={title} onChange={e => setTitle(e.target.value)} required />

          <label className="form-label">Content</label>
          <textarea className="form-textarea" value={content} onChange={e => setContent(e.target.value)} required />

          <label className="form-label">Tags</label>
          <div className="tag-row">
            <input
              className="form-input"
              placeholder="Add a tag and press +"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
            />
            <button className="tag-add-btn" onClick={addTag}>+</button>
          </div>

          <div className="tag-display">
            {tags.map((tag, i) => (
              <span key={i} className="tag-pill">#{tag}</span>
            ))}
          </div>

          <button className="form-btn" type="submit">Publish</button>
        </form>
      </div>
    </div>
  );
}

