import mongoose, { Schema, models } from "mongoose";

export interface IPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  status: "draft" | "published";
  publishedAt?: Date;
}

const PostSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedAt: { type: Date },
  },
  { timestamps: true },
);

const PostModel = models.Post || mongoose.model<IPost>("Post", PostSchema);

export default PostModel;
