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

router.post("/upload", upload.single("image"), uploadArtwork);  
router.get("/", getArtworks);  
router.delete("/:id", deleteArtwork);  
router.put("/:id", upload.single("image"), updateArtwork);


export default router;
