import React from 'react';

// Single Skeleton Card
const Skeltons = () => {
  return (
    <div className="animate-pulse bg-white shadow-md rounded-2xl p-4 w-[300px] h-[450px] m-4">
      {/* Image Placeholder */}
      <div className="bg-gray-300 h-44 w-full rounded-md mb-4"></div>

      {/* Trending Badge Placeholder */}
      <div className="bg-gray-300 w-24 h-5 rounded-md mb-2"></div>

      {/* Title Placeholder */}
      <div className="bg-gray-300 h-6 w-3/4 rounded-md mb-3"></div>

      {/* Brand / Model / Category Placeholders */}
      <div className="bg-gray-300 h-4 w-1/2 rounded-md mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/3 rounded-md mb-2"></div>
      <div className="bg-gray-300 h-4 w-2/3 rounded-md mb-2"></div>

      {/* Price & Discount */}
      <div className="bg-gray-300 h-5 w-1/4 rounded-md mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/3 rounded-md"></div>
    </div>
  );
};

// Grid of Skeleton Cards
const Skeleton = () => {
  const skeletonArray = new Array(12).fill(0); // Show 12 cards
  return (
    <div className="flex flex-wrap justify-center items-start">
      {skeletonArray.map((_, index) => (
        <Skeltons key={index} />
      ))}
    </div>
  );
};

export default Skeleton;
