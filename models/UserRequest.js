import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    compony: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    customerNumber: { type: String, required: true },
    requestedBy: { type: String, required: true },
    customerName: { type: String, required: true },
    state: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const UserRequest =
  mongoose.models.UserRequest || mongoose.model("UserRequest", userSchema);
export default UserRequest;
