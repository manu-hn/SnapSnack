import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer/Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "./utils/useRestaurants";
import useOnline from "./utils/useOnline.js";
import BestRestaurants from "./restaurants/BestRestaurants.js";


const ResList = () => {
    const { restaurants, filteredRestaurants, setFilteredRestaurants, setRestaurants, bestRestaurants, bestCuisines, exploreRes } = useRestaurants()
    const [searchText, setSearchText] = useState('')
    const online = useOnline()

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
    return restaurants?.length === 0 ? <Shimmer /> : (
        <div className="w-full mt-8 flex flex-col justify-start items-center flex-wrap">
            
            <div className="flex w-[60%] justify-evenly">
                <div>
                    <input type="text" placeholder="Search Here" className="border-b-2 px-5 ml-4 border-black w-72" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                    <button className="ml-4 border-2 px-4 rounded" onClick={() => {
                        filterRestaurants()
                    }}>Search</button>
                </div>
                <div>
                    <button onClick={() => topRated(restaurants)} className="border-2 px-4">Top Rated Restaurants</button>
                </div>
            </div>
            <div>
                <h1>Hello</h1>
            
            </div>
            <div className="flex flex-wrap justify-start w-[80%] border">
                {
                    filteredRestaurants.map(restaurant => <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}> <RestaurantCard resCard={restaurant} /> </Link>)
                }
            </div>
            <BestRestaurants bestRestaurants={bestRestaurants} />
            <BestRestaurants bestRestaurants={bestCuisines} />
            <BestRestaurants bestRestaurants={exploreRes} />
        </div>
    )
}

export default ResList;