// MovieTitleDescription.jsx
import React from "react";

const MovieTitleDescription = ({ title, description }) => {
  return (
    <div className="px-8 translate-y-60 absolute text-white width-screen aspect-video">
      <div className="w-2/3">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-4">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-4">{description}</p>
      </div>

      {/* Play and More Info buttons */}
      <div className="flex gap-4 text-m px-6 py-2 rounded-md">
        <button className="text-black font-semibold text-base sm:text-xl bg-gray-200 px-6 py-2 rounded-md">
          Play
        </button>
        <button className="bg-white bg-opacity-30 text-white font-semibold text-m px-6 py-2 rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default MovieTitleDescription;
