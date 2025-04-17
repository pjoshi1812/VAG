import React from 'react';
import { Link } from 'react-router-dom';
const artworks = [
    {
      id: 1,
      title: 'Starry Night',
      artist: 'Vincent van Gogh',
      artistProfile: '/artists/van-gogh',
      thumbnail: 'https://example.com/starry-night.jpg',
    },
    {
      id: 2,
      title: 'Mona Lisa',
      artist: 'Leonardo da Vinci',
      artistProfile: '/artists/da-vinci',
      thumbnail: 'https://example.com/mona-lisa.jpg',
    },
    {
      id: 3,
      title: 'The Persistence of Memory',
      artist: 'Salvador Dalí',
      artistProfile: '/artists/dali',
      thumbnail: 'https://example.com/persistence-of-memory.jpg',
    },
    {
      id: 4,
      title: 'The Scream',
      artist: 'Edvard Munch',
      artistProfile: '/artists/munch',
      thumbnail: 'https://example.com/the-scream.jpg',
    },
    {
      id: 5,
      title: 'Girl with a Pearl Earring',
      artist: 'Johannes Vermeer',
      artistProfile: '/artists/vermeer',
      thumbnail: 'https://example.com/girl-with-pearl-earring.jpg',
    },
    {
      id: 6,
      title: 'Guernica',
      artist: 'Pablo Picasso',
      artistProfile: '/artists/picasso',
      thumbnail: 'https://example.com/guernica.jpg',
    },
    {
      id: 7,
      title: 'The Birth of Venus',
      artist: 'Sandro Botticelli',
      artistProfile: '/artists/botticelli',
      thumbnail: 'https://example.com/birth-of-venus.jpg',
    },
    {
      id: 8,
      title: 'The Night Watch',
      artist: 'Rembrandt',
      artistProfile: '/artists/rembrandt',
      thumbnail: 'https://example.com/night-watch.jpg',
    },
    {
      id: 9,
      title: 'American Gothic',
      artist: 'Grant Wood',
      artistProfile: '/artists/grant-wood',
      thumbnail: 'https://example.com/american-gothic.jpg',
    },
    {
      id: 10,
      title: 'The Kiss',
      artist: 'Gustav Klimt',
      artistProfile: '/artists/klimt',
      thumbnail: 'https://example.com/the-kiss.jpg',
    },
  ];
  

const Gallery = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Art Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artworks.map((art) => (
          <Link key={art.id} to={`/artwork/${art.id}`}>
            <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer">
              <img src={art.thumbnail} alt={art.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{art.title}</h2>
                <p className="text-sm text-gray-600">{art.artist}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
