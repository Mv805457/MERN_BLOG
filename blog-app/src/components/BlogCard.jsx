export default function BlogCard({ blog }) {
  return (
    <div className="blog-card">
      <div className="blog-title">{blog.title}</div>
      <div className="blog-author">By {blog.user?.name || "Unknown"}</div>
      <div className="blog-snippet">
        {blog.content.substring(0, 120)}...
      </div>
    </div>
  );
}

