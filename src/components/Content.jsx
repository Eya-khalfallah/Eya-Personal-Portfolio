// src/Content.jsx
import React from "react";

const Content = () => {
  return (
    <div className="ml-1/4 w-3/4 p-8 overflow-y-auto">
      <section className="mb-8">
        <h1 className="text-4xl font-bold">
          I Craft The <span className="text-teal-400">Digital Landscape</span>
        </h1>
        <p className="mt-2">
          I am a <span className="font-semibold text-teal-400">Frontend Developer</span> at heart, creating features that are best suited for the job at hand.
        </p>
        {/* Hire Me Button */}
        <button className="mt-4 px-6 py-2 bg-teal-500 rounded-lg">Hire Me</button>
      </section>
      
      {/* Additional Sections */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-teal-400">About Me</h2>
        <p className="mt-2">
          Hi, my name is Brown Reddick. I began using WordPress when I first began, spent...
        </p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
};

export default Content;
