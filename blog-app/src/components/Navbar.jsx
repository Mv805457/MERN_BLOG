import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/PageStyles.css";

export default function Navbar() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const avatar = user?.avatar;

  useEffect(() => {
    const sync = () => setToken(localStorage.getItem("token"));
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    window.location.href = "/";
  };

  return (
    <header className="navbar">
      <div className="navbar-inner container">

        {/* LEFT — LOGO */}
        <Link to="/" className="nav-logo">
          <span className="logo-dot" />
          BlogApp
        </Link>

        {/* RIGHT — NAVIGATION */}
        <div className="nav-menu">
          <NavLink to="/" className="nav-item">Home</NavLink>
          <NavLink to="/blogs" className="nav-item">Blogs</NavLink>
          <NavLink to="/create" className="nav-item">Create</NavLink>
          <NavLink to="/about" className="nav-item">About</NavLink>

          {!token ? (
            <>
              <NavLink to="/login" className="nav-item nav-action">Login</NavLink>
              <NavLink to="/register" className="nav-item nav-action">Register</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/profile" className="nav-avatar">
                <img
                  src={
                    avatar
                      ? avatar
                      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user?.name || "U"
                        )}&background=111827&color=fff`
                  }
                  alt="avatar"
                />
              </NavLink>

              <button className="nav-action" onClick={logout}>
                Sign Out
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

