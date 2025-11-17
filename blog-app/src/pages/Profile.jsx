import React, { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";
import "../styles/PageStyles.css";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const run = async () => {
      try {
        const res = await API.get("/users/profile");
        setUser(res.data);
        const b = await API.get("/blogs");
        const userBlogs = b.data.filter(x => x.user?._id === res.data._id);
        setBlogs(userBlogs);
      } catch (err) {
        console.error(err);
      }
    };
    run();
  }, []);

  if(!user) return <div className="container page"><p className="empty-text">Loading...</p></div>;

  return (
    <div className="container page">
      <h1 className="section-title">My Profile</h1>

      <div className="profile-card">
                <img
  src={`https://ui-avatars.com/api/?name=${user.name}&size=140&background=202534&color=fff`}
  className="profile-avatar"
/>

        <h2 className="profile-name">{user.name}</h2>
        <div className="profile-email">{user.email}</div>
      </div>

      <h2 className="section-title">My Blogs</h2>
      {blogs.length === 0 ? (
        <p className="empty-text">You haven't created any blogs yet.</p>
      ) : (
        <div className="grid">
          {blogs.map(b => (
            <Link to={`/blogs/${b._id}`} key={b._id} className="card">
              <h3 className="card-title">{b.title}</h3>
              <div className="card-meta">Published {new Date(b.createdAt).toLocaleDateString()}</div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

