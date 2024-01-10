import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer/Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "./utils/useRestaurants";
import useOnline from "./utils/useOnline.js";
import BestRestaurants from "./restaurants/BestRestaurants.js";
import BestOffers from "./restaurants/BestOffers.js";
import WhatsOnYourMind from "./restaurants/WhatsOnYourMind.js";
import {  useSelector } from "react-redux";
import PleaseLoginToContinue from "./auth/PleaseLoginToContinue.js";
import TopRestaurants from "./restaurants/TopRestaurants.js";

const ResList = () => {
    const { restaurants, resCards, filteredRestaurants, setFilteredRestaurants, bestRestaurants, bestCuisines, exploreRes } = useRestaurants()
    const [searchText, setSearchText] = useState('')
    const online = useOnline();
    const useInfo=useSelector(store=>store.userInfo.isLoggedIn)
  
    function topRated(restaurants) {
        const filteredRestaurants = restaurants.filter((restaurant) => {
            return restaurant.info.avgRating > 4
        })
        setFilteredRestaurants(filteredRestaurants)
    }

    function filterRestaurants() {
        const filteredList = restaurants.filter((restaurant) => {

            return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
        })
        setFilteredRestaurants(filteredList)
    }

    if (!online) return <h1>Something went wrong please check your connection</h1>;
    return useInfo ? (restaurants?.length === 0 ? <Shimmer /> : (
        <div className="w-full mt-8 flex flex-col justify-start items-center flex-wrap container">
            <div className="flex justify-around w-[80%]">
                <div>
                    <input type="text" placeholder="Search Here" className="border-b-2 outline-none px-5 ml-4 border-black w-72" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="ml-4 border-2 px-4 rounded bg-" onClick={() => {
                        filterRestaurants()
                    }}>Search</button>
                </div>
              
            </div>
            <div className="mb-6">
                <BestOffers />
            </div>
            <div className="mb-8">
            <WhatsOnYourMind />
            </div>
            <div className="mb-14">
                <TopRestaurants />
            </div>
            <div className="w-[80%] mt-12 mb-6">
                <h1 className="text-left font-bold text-2xl">{resCards[3]?.card?.card?.title}</h1>
            </div>
            <div className="flex flex-wrap justify-around w-[80%]">

                {
                    filteredRestaurants.map(restaurant => <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}> <RestaurantCard resCard={restaurant} /> </Link>)
                }
            </div>
            <BestRestaurants bestRestaurants={bestRestaurants} />
            <BestRestaurants bestRestaurants={bestCuisines} />
            <BestRestaurants bestRestaurants={exploreRes} />
        </div>
    )) : (<PleaseLoginToContinue />)
}

export default ResList;