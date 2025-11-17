import { useState } from "react";
import API from "../api/axios";
import "../styles/PageStyles.css";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const publishBlog = async (e) => {
    e.preventDefault();
    const res = await API.post("/blogs", { title, content });
    navigate(`/blogs/${res.data._id}`);
  };

  return (
    <div className="page-center">
      <h1 className="section-title">Create Blog</h1>

      <form style={{ marginTop: "20px" }} onSubmit={publishBlog}>
        <input className="input" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <textarea className="textarea" placeholder="Write your blog..."
          onChange={(e) => setContent(e.target.value)} />

        <button className="btn" style={{ width: "100%" }}>Publish</button>
      </form>
    </div>
  );
}

