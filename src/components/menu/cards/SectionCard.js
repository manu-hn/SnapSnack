
import React, { useState } from "react";
import { IMG_API, } from "../../utils/EnvVariable";
import AddToCart from "../../assets/AddToCart";
import RemoveItemFromCart from "../../assets/RemoveItemFromCart";

const SectionCard = ({ listInfo, }) => {
    const { title, itemCards } = listInfo
    const [isAccordionOpen, setIsAccordionOpen] = useState(false)

    const handleVisibility = () => {
        // Toggle the visibility of the div
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <>
            <div className="w-full px-8 mt-4">
                <div className="flex justify-between px-4 bg-gray-300 bg-opacity-55 py-2 cursor-pointer" onClick={handleVisibility}>
                    <h6 className="text-xl font-bold text-black">{title} ({itemCards.length})</h6>
                    <span className="text-2xl">⬇️</span>
                </div>
                {isAccordionOpen && (
                    <div>
                        {
                            itemCards.map((cuisine) => {
                               
                                return (
                                    <div key={cuisine.card.info.id} className="border-b w-[95%] flex justify-between m-4 p-4">

                                        <div className="w-9/12">
                                            <h1 className="font-semibold"> {cuisine?.card?.info?.name} </h1>
                                            <h2 className="ml-4">- ₹ {cuisine?.card?.info?.price ? cuisine?.card?.info?.price / 100 : cuisine?.card?.info?.defaultPrice / 100} Rs</h2>
                                            <p className="ml-4 text-xs">{cuisine?.card?.info?.description}</p>

                                        </div>
                                        <div className="flex flex-col items-end w-3/12 ">
                                            <img className="rounded w-36 h-24" src={IMG_API + cuisine?.card?.info?.imageId} alt={`Food Image`} />
                                            <div className="flex justify-evenly mt-1 w-36">
                                                <AddToCart item={cuisine} />
                                                <RemoveItemFromCart itemID={cuisine.card.info.id} />
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
