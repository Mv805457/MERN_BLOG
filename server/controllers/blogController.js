import Blog from "../models/blogModel.js";

// ✅ GET all blogs
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("user", "name email");
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ GET a single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ CREATE a blog
export const createBlog = async (req, res) => {
  try {
    const { title, content, tags, cover } = req.body;
    const blog = new Blog({
      user: req.user._id,
      title,
      content,
      tags,
      cover,
    });
    const created = await blog.save();
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ✅ UPDATE a blog
export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.user.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Not authorized" });

    blog.title = req.body.title || blog.title;
    blog.content = req.body.content || blog.content;
    blog.tags = req.body.tags || blog.tags;
    blog.cover = req.body.cover || blog.cover;

    const updated = await blog.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ✅ DELETE a blog
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    if (blog.user.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Not authorized" });

    await blog.deleteOne();
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

