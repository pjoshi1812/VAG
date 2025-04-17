import React from 'react';
import { useParams, Link } from 'react-router-dom';

const artworks = [
    {
      id: 1,
      title: 'Starry Night',
      artist: 'Vincent van Gogh',
      artistProfile: '/artists/van-gogh',
      thumbnail: 'https://example.com/starry-night.jpg',
      description: 'A famous painting by Van Gogh showcasing a swirling night sky over a quiet town.',
    },
    {
      id: 2,
      title: 'Mona Lisa',
      artist: 'Leonardo da Vinci',
      artistProfile: '/artists/da-vinci',
      thumbnail: 'https://example.com/mona-lisa.jpg',
      description: 'The most iconic painting in the world, known for Mona Lisa’s enigmatic smile.',
    },
    {
      id: 3,
      title: 'The Persistence of Memory',
      artist: 'Salvador Dalí',
      artistProfile: '/artists/dali',
      thumbnail: 'https://example.com/persistence-of-memory.jpg',
      description: 'Surreal painting featuring melting clocks that challenges our sense of time.',
    },
    {
      id: 4,
      title: 'The Scream',
      artist: 'Edvard Munch',
      artistProfile: '/artists/munch',
      thumbnail: 'https://example.com/the-scream.jpg',
      description: 'An expressionist masterpiece representing anxiety and existential dread.',
    },
    {
      id: 5,
      title: 'Girl with a Pearl Earring',
      artist: 'Johannes Vermeer',
      artistProfile: '/artists/vermeer',
      thumbnail: 'https://example.com/girl-with-pearl-earring.jpg',
      description: 'A portrait known as the "Mona Lisa of the North" with a mysterious gaze.',
    },
    {
      id: 6,
      title: 'Guernica',
      artist: 'Pablo Picasso',
      artistProfile: '/artists/picasso',
      thumbnail: 'https://example.com/guernica.jpg',
      description: 'A powerful political painting portraying the horrors of war.',
    },
    {
      id: 7,
      title: 'The Birth of Venus',
      artist: 'Sandro Botticelli',
      artistProfile: '/artists/botticelli',
      thumbnail: 'https://example.com/birth-of-venus.jpg',
      description: 'Depicts the goddess Venus emerging from the sea on a shell.',
    },
    {
      id: 8,
      title: 'The Night Watch',
      artist: 'Rembrandt',
      artistProfile: '/artists/rembrandt',
      thumbnail: 'https://example.com/night-watch.jpg',
      description: 'A large Baroque painting known for its dramatic use of light and motion.',
    },
    {
      id: 9,
      title: 'American Gothic',
      artist: 'Grant Wood',
      artistProfile: '/artists/grant-wood',
      thumbnail: 'https://example.com/american-gothic.jpg',
      description: 'Depicts a farmer and his daughter, symbolizing rural American values.',
    },
    {
      id: 10,
      title: 'The Kiss',
      artist: 'Gustav Klimt',
      artistProfile: '/artists/klimt',
      thumbnail: 'https://example.com/the-kiss.jpg',
      description: 'A romantic and iconic Art Nouveau painting of an intimate embrace.',
    },
  ];
  
  
const ArtworkDetail = () => {
  const { id } = useParams();
  const artwork = artworks.find((a) => a.id === parseInt(id));

  if (!artwork) return <div>Artwork not found.</div>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <img src={artwork.thumbnail} alt={artwork.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{artwork.title}</h1>
      <p className="text-md mt-2">{artwork.description}</p>
      <p className="text-sm text-gray-700 mt-2">
        by{' '}
        <Link to={artwork.artistProfile} className="text-blue-500 hover:underline">
          {artwork.artist}
        </Link>
      </p>
      <Link to="/gallery" className="text-blue-600 mt-4 inline-block hover:underline">← Back to Gallery</Link>
    </div>
  );
};

export default ArtworkDetail;
