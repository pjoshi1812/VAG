import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArtistProfilePage = () => {
  const [artworks, setArtworks] = useState([]);
  const [newArt, setNewArt] = useState({ title: '', description: '', image: null, imageUrl: '' });
  const [selectedArtworkId, setSelectedArtworkId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      fetchArtworks(user.id);
    }
  }, []);

  const fetchArtworks = async (userId) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/artworks/artist/${userId}`);
      setArtworks(res.data);
    } catch (err) {
      console.error('Error fetching artworks:', err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArt({ ...newArt, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewArt({ ...newArt, image: e.target.files[0] });
  };

  const handleUpload = async () => {
    if (!newArt.title || !newArt.description) {
      return alert('Please fill all fields');
    }

    const formData = new FormData();
    formData.append('title', newArt.title);
    formData.append('description', newArt.description);
    if (newArt.image) {
      formData.append('image', newArt.image);
    }

    try {
      let res;
      if (selectedArtworkId) {
        
        res = await axios.put(
          `http://localhost:5000/api/artworks/${selectedArtworkId}`,
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
      } else {
       
        res = await axios.post(
          'http://localhost:5000/api/artworks/upload',
          formData,
          { headers: { 'Content-Type': 'multipart/form-data' } }
        );
      }

      if (selectedArtworkId) {
       
        setArtworks(
          artworks.map((art) => (art._id === selectedArtworkId ? res.data : art))
        );
      } else {
       
        setArtworks([res.data, ...artworks]);
      }

      setNewArt({ title: '', description: '', image: null, imageUrl: '' });
      setSelectedArtworkId(null); 
    } catch (err) {
      alert('Operation failed');
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/artworks/${id}`);
      setArtworks(artworks.filter((art) => art._id !== id));
    } catch (err) {
      console.error('Failed to delete:', err);
    }
  };

  const handleEdit = (art) => {
   
    setNewArt({
      title: art.title,
      description: art.description,
      imageUrl: art.imageUrl,  
      image: null,  
    });
    setSelectedArtworkId(art._id);  
  };

  const handleCancelEdit = () => {
    setNewArt({ title: '', description: '', image: null, imageUrl: '' });
    setSelectedArtworkId(null); 
  };

  return (
    <div className="p-4 sm:p-6 md:p-12 bg-pink-50 min-h-screen">
      {/* Artist Info */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">{JSON.parse(localStorage.getItem('user'))?.email || 'Artist'}</h2>
        <p className="text-gray-600 mb-1">🎨 Artist</p>
      </div>

      {/* Upload or Edit Form */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md mb-6 sm:mb-10">
        <h3 className="text-lg sm:text-xl font-semibold mb-4">
          {selectedArtworkId ? 'Edit Artwork' : 'Upload Your Artwork'}
        </h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={newArt.title}
            onChange={handleInputChange}
            placeholder="Artwork Title"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input
            type="text"
            name="description"
            value={newArt.description}
            onChange={handleInputChange}
            placeholder="Short Description"
            className="border border-gray-300 p-2 rounded w-full"
          />
          <input type="file" onChange={handleImageChange} className="w-full" />
          <div className="flex flex-col sm:flex-row gap-2">
            <button
              onClick={handleUpload}
              className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 w-full sm:w-auto"
            >
              {selectedArtworkId ? 'Save Changes' : 'Upload'}
            </button>
            {selectedArtworkId && (
              <button
                onClick={handleCancelEdit}
                className="text-gray-500 hover:underline w-full sm:w-auto text-center"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Art Gallery */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold mb-4">Your Gallery</h3>
        {artworks.length === 0 ? (
          <p className="text-gray-500">No art uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {artworks.map((art) => (
              <div
                key={art._id}
                className="bg-white p-3 sm:p-4 rounded-xl shadow-md flex flex-col"
              >
                <img
                  src={`http://localhost:5000${art.imageUrl}`}
                  alt={art.title}
                  className="w-full h-32 sm:h-48 object-cover rounded mb-3"
                />
                <h4 className="text-base sm:text-lg font-bold">{art.title}</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">{art.description}</p>
                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => handleEdit(art)}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(art._id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistProfilePage;
