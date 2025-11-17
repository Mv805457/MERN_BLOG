import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <div className="logo-box"></div>
        BlogApp
      </Link>

      <div className="nav-right">
        <NavLink to="/" className="nav-item">Home</NavLink>
        <NavLink to="/blogs" className="nav-item">Blogs</NavLink>
        <NavLink to="/create" className="nav-item">Create</NavLink>
        <NavLink to="/about" className="nav-item">About</NavLink>

        {user ? (
          <>
            <NavLink to="/profile" className="nav-item">Profile</NavLink>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="nav-item">Login</NavLink>
            <NavLink to="/register" className="nav-item register-btn">Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

