import React from "react";
import { IMG_API } from "./utils/EnvVariable";


const RestaurantCard = ({ resCard }) => {
    const { name, cloudinaryImageId, areaName, cuisines, costForTwo, avgRating, sla: { deliveryTime, slaString } } = resCard.info

    return (
        <div className="w-64 h-[17.25rem] bg-gray-50 m-4 p-4 rounded-lg transition-transform transform hover:scale-[95%] hover:delay-[200]">

            <div className="flex flex-col justify-center items-center ">
                <img className="w-[100%] shadow-lg h-36 rounded-lg" src={`${IMG_API}${cloudinaryImageId}`} alt="" />
                <label className="absolute top-[8.5rem] bg-gray-50 bg-opacity-75 text-center w-full text-black text-lg font-bold" htmlFor="">{resCard?.info?.aggregatedDiscountInfoV3?.header} {resCard?.info?.aggregatedDiscountInfoV3?.subHeader}</label>

            </div>
            <div className="description mt-2 overflow-hidden">
                <h4 className="font-bold line-clamp-1">{name}</h4>
                <p className="text-gray-500 text-sm font-bold">  {avgRating}⭐ . {slaString}</p>
                <h4 className="text-gray-500 text-sm w-[100%] line-clamp-1">{cuisines.join(', ')}</h4>
                <h4 className="text-gray-500 text-sm line-clamp-1">{areaName}</h4>
            </div>

        </div>
    )
}



export default RestaurantCard;