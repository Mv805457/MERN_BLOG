import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="pt-40 pb-32 text-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Share your <span className="text-indigo-600">thoughts</span> with the world 🌍
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          MyBlog lets you write, edit, and publish your stories beautifully.  
          Explore insights from creative writers across the globe.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/create"
            className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 shadow-md hover:shadow-lg transition"
          >
            Start Writing
          </Link>
          <Link
            to="/blogs"
            className="px-8 py-3 bg-gray-200 text-gray-800 rounded-full font-medium hover:bg-gray-300 shadow-md hover:shadow-lg transition"
          >
            Explore Blogs
          </Link>
        </div>
      </div>
    </section>
  );
}

