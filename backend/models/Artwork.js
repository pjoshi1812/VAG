import mongoose from "mongoose";

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Assuming user login exists
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Artwork", artworkSchema);
