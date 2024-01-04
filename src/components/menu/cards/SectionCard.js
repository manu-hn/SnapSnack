
import React, { useState } from "react";
import { IMG_API, } from "../../utils/EnvVariable";



const SectionCard = ({ listInfo, isSectionVisible, setShowIndex }) => {

    const { title, itemCards } = listInfo
    const [vegItems, setVegItems] = useState(itemCards);

    const handleVisibility = () => {
        // Toggle the visibility of the div
        setShowIndex()
    };

   

    return (
        <>
          
            <div className="w-full px-8 mt-4">
                <div className="flex justify-between px-4 bg-gray-300 bg-opacity-55 py-2 cursor-pointer" onClick={handleVisibility}>
                    <h6 className="text-xl font-bold text-black">{title} ({vegItems.length})</h6>
                    <span className="text-2xl">⬇️</span>
                </div>
                {isSectionVisible && (
                    <div>
                        {
                            vegItems.map((cuisine) => {

                                return (
                                    <div key={cuisine.card.info.id} className="border-b w-[95%] flex justify-between m-4 p-4">

                                        <div className="w-9/12">
                                            <h1 className="font-semibold"> {cuisine?.card?.info?.name} </h1>
                                            <h2 className="ml-4">- ₹ {cuisine?.card?.info?.price ? cuisine?.card?.info?.price / 100 : cuisine?.card?.info?.defaultPrice / 100} Rs</h2>
                                            <p className="ml-4 text-xs">{cuisine?.card?.info?.description}</p>

                                        </div>
                                        <div className="flex flex-col items-end w-3/12 ">
                                            <img className="rounded w-36 h-24" src={IMG_API + cuisine?.card?.info?.imageId} alt={`Food Image`} />
                                            <div className="flex justify-center border w-36">
                                                <button className="px-4 py-2 rounded w-full border border-gray-400 text-xs text-green-400 bg-opacity-75">Add +</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
                <div className='w-full h-4 bg-gray-300 mt-8'>

                </div>
            </div>
        </>
    );
}

export default SectionCard;
