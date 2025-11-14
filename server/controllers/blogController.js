import Blog from "../models/blogModel.js";

// GET ALL BLOGS
export const getBlogs = async (req, res) => {
  const blogs = await Blog.find().populate("user", "name email");
  res.json(blogs);
};

// GET SINGLE BLOG
export const getBlogById = async (req, res) => {
  const blog = await Blog.findById(req.params.id).populate("user", "name email");
  res.json(blog);
};

// CREATE BLOG
export const createBlog = async (req, res) => {
  const { title, content } = req.body;

  const blog = await Blog.create({
    user: req.user._id,
    title,
    content,
        tags: []
  });

  res.status(201).json(blog);
};

// UPDATE BLOG
export const updateBlog = async (req, res) => {
  const { title, content } = req.body;

  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  blog.title = title;
  blog.content = content;
  

  await blog.save();
  res.json(blog);
};

// DELETE BLOG
export const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  await blog.deleteOne();
  res.json({ message: "Blog deleted" });
};

