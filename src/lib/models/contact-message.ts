import mongoose, { Schema, models } from "mongoose";

export interface IContactMessage {
  name: string;
  email: string;
  message: string;
  read: boolean;
  ip?: string;
}

const ContactMessageSchema = new Schema<IContactMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    message: { type: String, required: true },
    read: { type: Boolean, default: false },
    ip: { type: String },
  },
  { timestamps: true },
);

const ContactMessageModel =
  models.ContactMessage ||
  mongoose.model<IContactMessage>("ContactMessage", ContactMessageSchema);

export default ContactMessageModel;
