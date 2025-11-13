import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* HERO BACKGROUND SECTION */}
      <div className="hero-bg">
        <div className="page">

          <h1 className="hero-title">Write. Publish. Connect.</h1>

          <p className="hero-sub">
            Create beautiful news and media style blogs. Clean, modern, minimal.
          </p>

          <Link to="/blogs">
            <button className="hero-btn">Explore Blogs</button>
          </Link>

        </div>
      </div>

      {/* RECENT BLOGS SECTION */}
      <div className="page" style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "28px", fontWeight: 700 }}>Recent Blogs</h2>
        <p>No blogs yet.</p>
      </div>
    </>
  );
}

