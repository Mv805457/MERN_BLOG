import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/PageStyles.css";

export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    API.get(`/blogs/${id}`).then(res => {
      setTitle(res.data.title);
      setContent(res.data.content);
    }).catch(err => console.error(err));
  }, [id]);

  const update = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/blogs/${id}`, { title, content });
      navigate(`/blogs/${id}`);
    } catch (err) {
      console.error(err);
      alert("Failed to update");
    }
  };

  return (
    <div className="container page">
      <h1 className="section-title">Edit Blog</h1>

      <form className="form-card" onSubmit={update}>
        <input className="input" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required />
        <textarea className="input" placeholder="Write your blog..." value={content} onChange={e=>setContent(e.target.value)} required />
        <div style={{display:"flex",justifyContent:"flex-end",gap:12}}>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

