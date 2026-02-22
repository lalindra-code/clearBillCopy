import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  passwordHash: string | null;
  googleId: string | null;
  profileImage: string | null;
  plan: "free" | "pro";
  planExpiresAt: Date | null;
  invoiceCount: number;
  whatsappSendsCount: number;
  resetToken: string | null;
  resetTokenExpiry: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    passwordHash: { type: String, default: null },
    googleId: { type: String, default: null },
    profileImage: { type: String, default: null },
    plan: { type: String, enum: ["free", "pro"], default: "free" },
    planExpiresAt: { type: Date, default: null },
    invoiceCount: { type: Number, default: 0 },
    whatsappSendsCount: { type: Number, default: 0 },
    resetToken: { type: String, default: null },
    resetTokenExpiry: { type: Date, default: null },
  },
  {
    timestamps: true,
  }
);

UserSchema.index({ googleId: 1 }, { sparse: true });
UserSchema.index({ resetToken: 1 }, { sparse: true });

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
