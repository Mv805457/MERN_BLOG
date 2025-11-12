import React from "react";

export default function ViewBlog() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-3xl font-bold mb-3">Sample Article Title</h1>
          <div className="text-sm text-gray-500 mb-6">by Abhijith • Apr 15 • 5 min read</div>
          <img className="w-full rounded-lg mb-6" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=60" alt="cover" />
          <div className="prose max-w-none text-gray-700">
            <p>This is a demo article. Replace with real post content from your API.</p>
            <p>Use markdown renderer or rich text HTML to display content here.</p>
          </div>
        </article>
      </div>
    </div>
  );
}

