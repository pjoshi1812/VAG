import Artwork from "../models/Artwork.js";

export const uploadArtwork = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

    if (!title || !description || !imageUrl) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const artwork = new Artwork({
      title,
      description,
      imageUrl,
      uploadedBy: req.userId || null 
    });

    await artwork.save();
    res.status(201).json(artwork);
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error: error.message });
  }
};

export const getArtworks = async (req, res) => {
  try {
    const artworks = await Artwork.find().sort({ createdAt: -1 });
    res.json(artworks);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch artworks" });
  }
};

export const deleteArtwork = async (req, res) => {
  try {
    const { id } = req.params;
    await Artwork.findByIdAndDelete(id);
    res.json({ message: "Artwork deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete artwork" });
  }
};



export const updateArtwork = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    let imageUrl = req.body.imageUrl;  

    if (req.file) {
      
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const updatedArtwork = await Artwork.findByIdAndUpdate(
      id,
      { title, description, imageUrl },
      { new: true } 
    );

    if (!updatedArtwork) {
      return res.status(404).json({ message: "Artwork not found" });
    }

    res.json(updatedArtwork);
  } catch (error) {
    res.status(500).json({ message: "Failed to update artwork", error: error.message });
  }
};

