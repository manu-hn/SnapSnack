import React, { useState } from 'react';
import Shimmer from '../shimmer/Shimmer';

const BestRestaurants = ({ bestRestaurants, title }) => {


  const [displayCount, setDisplayCount] = useState(7);

  const handleShowMore = () => {
    setDisplayCount(bestRestaurants.length);
  };

  if (bestRestaurants.length===0) return <Shimmer />
  return (
   
    
    <div className="w-full flex justify-center">
      <div className="w-[85%] mt-6">
        <h1 className="font-bold text-2xl my-3 mx-4">{title}</h1>
        <section className="flex flex-wrap justify-evenly">
          {bestRestaurants.slice(0, displayCount).map((brand) => (
            <div key={brand.text} className="border rounded-xl m-2 px-2 py-3 w-[22%] text-center overflow-hidden cursor-pointer">
              <h1 className="line-clamp-1 text-gray-700 text-base font-medium">{brand.text}</h1>
            </div>
          ))}

          {displayCount < bestRestaurants.length && (
            <div className="border rounded-xl m-2 px-2 py-3 w-[22%] text-center overflow-hidden cursor-pointer">
              <button onClick={handleShowMore} className="show-more-button">
                Show More ⬇️
              </button>
            </div>
          )}
        </section>
      </div>
    </div>


  );
};

export default BestRestaurants;
