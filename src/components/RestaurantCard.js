import React from "react";
import { IMG_API } from "./utils/EnvVariable";
const RestaurantCard = ({ resCard }) => {

    
    const { name, cloudinaryImageId, areaName, cuisines, costForTwo } = resCard.info


    return (
        <div className="card">
            <div>
                <img className="resImage" src={`${IMG_API}${cloudinaryImageId}`} alt="" />
            </div>
            <div className="description">
                <h4>{name}</h4>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{areaName}</h4>
                <h4>{costForTwo}</h4>
                
            </div>
        </div>
    )
}

export default RestaurantCard;