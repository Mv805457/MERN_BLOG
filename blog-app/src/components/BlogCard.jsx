import React from "react";

export default function BlogCard({ title, author, desc, cover }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100">
      <div className="w-full h-48 bg-gray-100">
        <img src={cover} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>by {author}</span>
          <span>• 2.3k views</span>
        </div>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{desc}</p>
        <div className="flex justify-between items-center">
          <button className="text-teal-600 text-sm font-medium hover:underline">Read More →</button>
          <div className="text-sm text-gray-400">Apr 15</div>
        </div>
      </div>
    </article>
  );
}

