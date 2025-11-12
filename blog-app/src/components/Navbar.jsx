import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center bg-black text-white px-6 py-3">
      <Link to="/" className="text-xl font-bold">BlogApp</Link>
      <div className="space-x-4">
        <Link to="/blogs">All Blogs</Link>
        {user && <Link to="/create">Create</Link>}
        {user ? (
          <button onClick={logout} className="bg-white text-black px-3 py-1 rounded">Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

