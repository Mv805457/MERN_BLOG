import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <Link to="/" className="nav-logo">
        <span className="logo-bold">Blog</span>App
      </Link>

      {/* NAV LINKS */}
      <div className="nav-right">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/blogs" className="nav-item">Blogs</NavLink>
        <NavLink to="/create" className="nav-item">Create</NavLink>
        <NavLink to="/profile" className="nav-item">Profile</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>
        <NavLink to="/login" className="nav-item">Login</NavLink>
        <NavLink to="/register" className="nav-item">Register</NavLink>
      </div>
    </nav>
  );
}

