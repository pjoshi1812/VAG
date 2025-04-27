import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ArtworkDetail = () => {
  const { id } = useParams(); 
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artworks'); 
        const matchedArtwork = response.data.find((art) => art._id === id); 
        setArtwork(matchedArtwork);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [id]); 

  if (loading) {
    return <div>Loading artwork...</div>;
  }

  if (!artwork) {
    return <div>Artwork not found.</div>;
  }

  return (
    <div className="p-3 sm:p-4 max-w-xl mx-auto">
      <img
        src={`http://localhost:5000${artwork.imageUrl}`}
        alt={artwork.title}
        className="w-full h-48 sm:h-64 object-cover rounded"
      />
      <h1 className="text-xl sm:text-2xl font-bold mt-3 sm:mt-4">{artwork.title}</h1>
      <p className="text-sm sm:text-md mt-2">{artwork.description}</p>
     
      <Link to="/gallery" className="text-blue-600 mt-3 sm:mt-4 inline-block hover:underline text-sm sm:text-base">
        ← Back to Gallery
      </Link>
    </div>
  );
};

export default ArtworkDetail;