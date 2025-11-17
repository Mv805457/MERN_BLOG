import { Link } from "react-router-dom";
import API from "../api/axios";
import { useEffect, useState } from "react";
import "../styles/PageStyles.css";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get("/blogs").then(res => setBlogs(res.data)).catch(()=>{});
  }, []);

  return (
    <div className="page">
      <div className="container">
        <h1 className="section-title" style={{textAlign:"center"}}>All Blogs</h1>
        <p className="subtext" style={{textAlign:"center", marginBottom:24}}>Browse posts from the community</p>

        <div style={{maxWidth:860, margin:"0 auto"}}>
          {blogs.length === 0 && <p className="empty-text">No posts yet.</p>}

          {blogs.map(b => (
            <Link key={b._id} to={`/blogs/${b._id}`} className="card" style={{display:"block", marginBottom:16}}>
              <h3 className="card-title">{b.title}</h3>
              <div className="card-meta">By {b.user?.name || "Unknown"} • {new Date(b.createdAt).toLocaleDateString()}</div>
              <p style={{marginTop:8,color:"#444"}}>{b.content.substring(0,140)}...</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

