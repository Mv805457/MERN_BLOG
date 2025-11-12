import React from "react";
import BlogCard from "../components/BlogCard";

const myPosts = [
  { title: "My first post", author: "You", desc: "A short intro.", cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=60" },
  { title: "Design notes", author: "You", desc: "Thoughts on design.", cover: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=60" }
];

export default function Profile() {
  return (
    <section className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-gray-200" />
            <div>
              <h3 className="text-xl font-semibold">Your Name</h3>
              <div className="text-sm text-gray-500">you@example.com</div>
            </div>
          </div>
        </div>

        <h3 className="text-lg font-bold mb-4">Your posts</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {myPosts.map((p, i) => <BlogCard key={i} {...p} />)}
        </div>
      </div>
    </section>
  );
}

