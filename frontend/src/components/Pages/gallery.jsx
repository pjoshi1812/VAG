import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Gallery = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/artworks'); 
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
    <div className="p-3 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Art Gallery</h1>

      {loading ? (
        <p className="text-center">Loading artworks...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
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
                  src={`http://localhost:5000${art.imageUrl}`}
                  alt={art.title}
                  className="w-full h-32 sm:h-48 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h2 className="text-base sm:text-lg font-semibold">{art.title}</h2>
                  <p className="text-xs sm:text-sm text-gray-600">{art.description || 'Unknown Artist'}</p>
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