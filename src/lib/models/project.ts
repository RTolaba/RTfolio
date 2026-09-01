import mongoose, { Schema, models } from "mongoose";

export interface IProject {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  featured: boolean;
  order: number;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    stack: { type: [String], default: [] },
    href: { type: String },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const ProjectModel =
  models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default ProjectModel;
