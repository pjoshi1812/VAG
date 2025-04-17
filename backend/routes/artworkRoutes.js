import express from "express";
import multer from "multer";
import { uploadArtwork, getArtworks, deleteArtwork, updateArtwork } from "../controllers/artworkController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), uploadArtwork);  // For artwork upload
router.get("/", getArtworks);  // For fetching all artworks
router.delete("/:id", deleteArtwork);  // For deleting an artwork
router.put("/:id", upload.single("image"), updateArtwork);


export default router;
