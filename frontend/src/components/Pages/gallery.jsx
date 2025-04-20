import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artworks'); // Update with your actual endpoint
        setArtworks(response.data);
      } catch (error) {
        console.error('Error fetching artworks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Art Gallery</h1>

      {loading ? (
        <p className="text-center">Loading artworks...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artworks.map((art) => (
            <Link 
              key={art._id} 
              to={{
                pathname: `/artwork/${art._id}`,
                state: { artwork: art }
              }}
            >
              <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
                <img
                  src={`http://localhost:5000${art.imageUrl}`} // Access image URL with base URL
                  alt={art.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{art.title}</h2>
                  <p className="text-sm text-gray-600">{art.description || 'Unknown Artist'}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;