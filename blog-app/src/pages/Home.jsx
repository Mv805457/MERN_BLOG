import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero-bg">
        <div className="page">
          <h1 className="hero-title">Write. Publish. Connect.</h1>
          <p className="hero-sub">
            Create beautiful blogs with a clean, modern and minimal design.
          </p>
          <Link to="/blogs">
            <button className="hero-btn">Explore Blogs</button>
          </Link>
        </div>
      </div>

      <div className="page">
        <h2>Recent Blogs</h2>
        <p>No blogs yet.</p>
      </div>
    </>
  );
}

