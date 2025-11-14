import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [String]
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
