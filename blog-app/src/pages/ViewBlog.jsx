import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams, Link } from "react-router-dom";
import "../PageStyles.css";  

export default function ViewBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

useEffect(() => {
  axios
    .get(`/blogs/${id}`)
    .then((res) => {
      console.log("BLOG DATA:", res.data);   // <--- ADD THIS
      setBlog(res.data);
    })
    .catch((err) => console.log(err));
}, [id]);

  if (!blog) return <div className="loading">Loading...</div>;

  return (
    <div className="page-container">
      <div className="view-blog-container">

        <h1 className="view-title">{blog.title}</h1>

        <p className="view-author">By <span>{blog.author}</span></p>

        <div className="view-content-box">
          <p className="view-content">{blog.content}</p>

          <Link to={`/edit/${blog._id}`} className="edit-btn">
            Edit Blog
          </Link>
        </div>

      </div>
    </div>
  );
}

