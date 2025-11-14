import express from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} from "../controllers/blogController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getBlogs);
router.post("/", protect, createBlog);
router.get("/:id", getBlogById);
router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

export default router;
