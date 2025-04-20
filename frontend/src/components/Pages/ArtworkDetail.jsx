import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ArtworkDetail = () => {
  const { id } = useParams(); // Get artwork ID from URL
  const [artwork, setArtwork] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artworks'); // Your API endpoint
        const matchedArtwork = response.data.find((art) => art._id === id); // Match artwork by ID
        setArtwork(matchedArtwork);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, [id]); // Re-run the effect when the `id` changes

  if (loading) {
    return <div>Loading artwork...</div>;
  }

  if (!artwork) {
    return <div>Artwork not found.</div>;
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img
        src={`http://localhost:5000${artwork.imageUrl}`} // Use base URL for image path
        alt={artwork.title}
        className="w-full h-64 object-cover rounded"
      />
      <h1 className="text-2xl font-bold mt-4">{artwork.title}</h1>
      <p className="text-md mt-2">{artwork.description}</p>
      <p className="text-sm text-gray-700 mt-2">
        by{' '}
        <Link to={artwork.artistProfile} className="text-blue-500 hover:underline">
          {artwork.artist}
        </Link>
      </p>
      <Link to="/gallery" className="text-blue-600 mt-4 inline-block hover:underline">
        ← Back to Gallery
      </Link>
    </div>
  );
};

export default ArtworkDetail;