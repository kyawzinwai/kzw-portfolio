import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src="https://via.placeholder.com/1200x400"
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Lorem Ipsum Here Blahh Blahh Blahh</h1>
      </div>
    </div>
  );
};

export default Banner;
