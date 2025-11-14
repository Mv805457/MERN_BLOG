import Blog from "../models/blogModel.js";

// GET ALL
export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("user", "name email");
  res.json(blogs);
};

// GET ONE
export const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("user", "name email");
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
};

// CREATE
export const createBlog = async (req, res) => {
  const { title, content, tags } = req.body;
  const blog = await Blog.create({
    user: req.user._id,
    title,
    content,
    tags
  });
  const populated = await blog.populate("user", "name email");
  res.status(201).json(populated);
};

// UPDATE
export const updateBlog = async (req, res) => {
  const { title, content, tags } = req.body;
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  // optional: only owner can update
  if (blog.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }

  blog.title = title ?? blog.title;
  blog.content = content ?? blog.content;
  blog.tags = tags ?? blog.tags;
  await blog.save();
  const populated = await blog.populate("user", "name email");
  res.json(populated);
};

// DELETE
export const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  if (blog.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Not authorized" });
  }
  await blog.deleteOne();
  res.json({ message: "Blog deleted" });
};
