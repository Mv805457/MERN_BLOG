import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <Link to="/" className="nav-logo gradient-logo">
        BlogApp
      </Link>

      {/* Nav Links */}
      <div className="nav-right">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/blogs" className="nav-item">Blogs</NavLink>
        <NavLink to="/create" className="nav-item">Create</NavLink>
        <NavLink to="/profile" className="nav-item">Profile</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>

        {/* Login / Register */}
        <NavLink to="/login" className="nav-item">Login</NavLink>
        <NavLink to="/register" className="nav-item">Register</NavLink>
      </div>

    </nav>
  );
}

