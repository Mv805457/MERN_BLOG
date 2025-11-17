import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/PageStyles.css";

export default function EditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  // Fetch existing blog
  useEffect(() => {
    API.get(`/blogs/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setContent(res.data.content);
        setTags(res.data.tags?.join(", ") || "");
      })
      .catch((err) => console.error("Failed to load blog:", err));
  }, [id]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/blogs/${id}`, {
        title,
        content,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      });

      alert("Updated successfully!");
      navigate(`/blogs/${id}`);
    } catch (err) {
      console.log(err);
      alert("Failed to update");
    }
  };

  return (
    <div className="page-center">
      <div className="form-wrapper fade">
        <h2 className="form-title">Edit Blog</h2>

        <form onSubmit={submit} className="form-row">

          <label className="form-label">Title</label>
          <input
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter blog title"
            required
          />

          <label className="form-label">Content</label>
          <textarea
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your blog..."
            required
          />

          <label className="form-label">Tags (comma separated)</label>
          <input
            className="form-input"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="news, tech, web"
          />

          <button className="form-btn" type="submit">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

