import React from 'react';

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundColor: "#fce7f3",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div> 

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-24 text-black max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Discover a new <br /> kind of art
        </h1>

        <p className="text-lg md:text-xl mb-8 max-w-xl font-medium">
          "In strokes of silence, colors speak,<br/>
          A canvas holds the dreams we seek.<br/>
          Beyond the frame, a story flows,<br/>
          Where art begins, and logic slows."
        </p>

        <div className="flex gap-4">
          <button className="bg-black text-white px-6 py-3 font-semibold rounded hover:bg-gray-800 transition">
            BUY TICKETS
          </button>
          <button className="border border-black px-6 py-3 font-semibold rounded hover:bg-black hover:text-white transition">
            BROWSE EXHIBITIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
