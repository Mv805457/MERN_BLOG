import React from "react";

export default function About() {
  return (
    <section className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">About MyBlog</h2>
          <p className="text-gray-700 mb-4">
            MyBlog is a simple, modern blog platform built for the web technology project.
            It includes post creation, editing, listing, and user profile pages. Built with React, Vite and Tailwind.
          </p>
          <p className="text-gray-600 text-sm">Team: PES1UG24CS252, 254, 256</p>
        </div>
      </div>
    </section>
  );
}

