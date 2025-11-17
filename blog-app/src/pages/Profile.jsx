import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar") || null);

  useEffect(() => {
    API.get("/users/profile").then(res => setUser(res.data)).catch(()=>{});
    API.get("/blogs").then(res => {
      const uid = JSON.parse(localStorage.getItem("user") || "{}")._id;
      setBlogs(res.data.filter(b => b.user?._id === uid));
    }).catch(()=>{});
  }, []);

  if(!user) return <div className="page-center"><p className="subtext">Loading...</p></div>;

  const onUpload = (e) => {
    const f = e.target.files[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = () => {
      localStorage.setItem("avatar", reader.result);
      setAvatar(reader.result);
    };
    reader.readAsDataURL(f);
  };

  return (
    <div className="profile-page">
      <div className="profile-header">
        {avatar ? (
          <img src={avatar} alt="avatar" style={{width:110,height:110,borderRadius:110,objectFit:"cover",boxShadow:"0 10px 24px rgba(0,0,0,0.12)"}} />
        ) : (
          <div className="profile-avatar">{user.name ? user.name[0].toUpperCase() : "U"}</div>
        )}

        <div style={{marginTop:12}}>
          <input id="avatar-upload" type="file" accept="image/*" onChange={onUpload} style={{display:"none"}} />
          <label htmlFor="avatar-upload" style={{cursor:"pointer", color:"#111", fontWeight:600, marginRight:12}}>Change avatar</label>
          <button onClick={() => { localStorage.removeItem("avatar"); setAvatar(null); }} style={{cursor:"pointer"}}>Remove</button>
        </div>

        <h1 className="profile-name">{user.name}</h1>
        <div className="profile-email">{user.email}</div>
      </div>

      <h2 className="section-title">My Blogs</h2>
      <div className="profile-blog-list">
        {blogs.length === 0 && <p className="empty-text">You haven't created any blogs yet.</p>}
        {blogs.map(b => (
          <Link to={`/blogs/${b._id}`} key={b._id} className="profile-blog-card">
            <h3 style={{margin:0}}>{b.title}</h3>
            <p style={{marginTop:8,color:"#555"}}>{b.content.substring(0,120)}...</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

