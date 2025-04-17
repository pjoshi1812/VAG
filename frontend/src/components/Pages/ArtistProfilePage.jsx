import React, { useState } from 'react';

const ArtistProfilePage = () => {
  const [artworks, setArtworks] = useState([]);
  const [newArt, setNewArt] = useState({ title: '', description: '', image: null });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArt({ ...newArt, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewArt({ ...newArt, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleUpload = () => {
    if (newArt.title && newArt.description && newArt.image) {
      setArtworks([...artworks, { ...newArt, id: Date.now() }]);
      setNewArt({ title: '', description: '', image: null });
    }
  };

  const handleDelete = (id) => {
    setArtworks(artworks.filter((art) => art.id !== id));
  };

  return (
    <div className="p-6 md:p-12 bg-pink-50 min-h-screen">
      {/* Artist Info */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10 flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src="#"
          alt="Artist"
          className="w-36 h-36 rounded-full border-4 border-pink-200 object-cover"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">Priya Sharma</h2>
          <p className="text-gray-600 mb-1">🎨 Abstract & Modern Artist</p>
          <p className="text-sm text-gray-500">📍 Mumbai, India</p>
          <p className="text-sm text-gray-500">Joined: Jan 2024</p>
        </div>
      </div>

      {/* Upload Form */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-10">
        <h3 className="text-xl font-semibold mb-4">Upload Your Artwork</h3>
        <div className="flex flex-col md:flex-row gap-4">
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
          <button
            onClick={handleUpload}
            className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700"
          >
            Upload
          </button>
        </div>
      </div>

      {/* Art Gallery */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Your Gallery</h3>
        {artworks.length === 0 ? (
          <p className="text-gray-500">No art uploaded yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {artworks.map((art) => (
              <div
                key={art.id}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col"
              >
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h4 className="text-lg font-bold">{art.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{art.description}</p>
                <div className="flex gap-2 mt-auto">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button
                    onClick={() => handleDelete(art.id)}
                    className="text-red-600 hover:underline"
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
