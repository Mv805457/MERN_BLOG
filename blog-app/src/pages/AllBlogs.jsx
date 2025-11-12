import { useEffect, useState } from "react";
import API from "../api/axios";

export default function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await API.get("/blogs");
      setBlogs(data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="p-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((b) => (
        <div key={b._id} className="border rounded p-4 shadow hover:shadow-lg">
          <h2 className="font-bold text-xl">{b.title}</h2>
          <p className="text-gray-700 mt-2">{b.content.substring(0, 100)}...</p>
          <p className="text-sm text-gray-500 mt-2">By {b.user?.name || "Anonymous"}</p>
        </div>
      ))}
    </div>
  );
}

