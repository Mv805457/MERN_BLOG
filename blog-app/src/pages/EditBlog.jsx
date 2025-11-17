import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/PageStyles.css";

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/blogs/${id}`).then(res => {
      setTitle(res.data.title);
      setContent(res.data.content);
      setTags(res.data.tags || []);
    });
  }, [id]);

  const addTag = (e) => {
    e.preventDefault();
    if (!tagInput.trim()) return;
    setTags([...tags, tagInput.trim()]);
    setTagInput("");
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/blogs/${id}`, { title, content, tags });
      navigate(`/blogs/${id}`);
    } catch (err) {
      alert("Failed to update");
    }
  };

  return (
    <div className="page-center">
      <div className="form-wrapper fade">
        <h2 style={{ textAlign: "center", marginBottom: 8 }}>Edit Blog</h2>

        <form onSubmit={submit} className="form-row">
          <label className="form-label">Title</label>
          <input className="form-input" value={title} onChange={e=>setTitle(e.target.value)} required />

          <label className="form-label">Content</label>
          <textarea className="form-textarea" value={content} onChange={e=>setContent(e.target.value)} required />

          <label className="form-label">Tags</label>
          <div className="tag-row">
            <input
              className="form-input"
              placeholder="Add tag"
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

          <button className="form-btn" type="submit">Save changes</button>
        </form>
      </div>
    </div>
  );
}

