// src/Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-1/4 h-full p-4 bg-gray-800 fixed">
      <div className="text-center">
        {/* Profile Picture */}
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mx-auto mb-4"
        />
        {/* Profile Info */}
        <h2 className="text-lg font-semibold">Brown Reddick</h2>
        <p className="text-teal-400">Photographer</p>
        {/* Additional Info */}
        <div className="mt-4 space-y-2">
          <p>Residence: <span className="text-gray-400">Canada</span></p>
          <p>City: <span className="text-gray-400">Toronto</span></p>
          <p>Age: <span className="text-gray-400">26</span></p>
        </div>
        {/* Skills */}
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Skills</h3>
          <div className="flex space-x-2">
            {/* Skill Circles */}
            {['HTML', 'CSS', 'JS', 'PHP'].map((skill, index) => (
              <div key={index} className="w-12 h-12 flex items-center justify-center bg-gray-700 rounded-full">
                <span className="text-xs">{skill}</span>
              </div>
            ))}
          </div>
        </div>
        {/* Download CV Button */}
        <button className="mt-6 w-full py-2 bg-teal-500 rounded-lg">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
