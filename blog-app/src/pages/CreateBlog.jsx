import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import API from "../api/axios";

export default function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [msg, setMsg] = useState("");
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/blogs", { title, content, tags: tags.split(",") });
      setMsg("Blog posted!");
      setTitle("");
      setContent("");
      setTags("");
    } catch {
      setMsg("Error creating blog");
    }
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Create Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="border p-2 w-full rounded" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="border p-2 w-full rounded h-40" />
        <input value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Tags (comma separated)" className="border p-2 w-full rounded" />
        <button className="bg-black text-white w-full py-2 rounded">Publish</button>
        {msg && <p className="text-center text-sm text-gray-600">{msg}</p>}
      </form>
    </div>
  );
}

