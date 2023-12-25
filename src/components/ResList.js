import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer/Shimmer";
import { Link } from "react-router-dom";
import useRestaurants from "./utils/useRestaurants";
import useOnline from "./utils/useOnline.js";

const ResList = () => {
    const { restaurants, filteredRestaurants, setFilteredRestaurants, setRestaurants } = useRestaurants()
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

    if(!online)return <h1>Something went wrong please check your connection</h1>;
    return restaurants.length === 0 ? <Shimmer /> : (
        <div className="res-list">
            <div className="features">
                <input type="text" placeholder="Search Here" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button onClick={() => {
                    filterRestaurants()
                }}>Search</button>
                <button onClick={() => topRated(restaurants)}>Top Rated Restaurants</button>
            </div>
            <div className="resCards">
                {
                    filteredRestaurants.map(restaurant => <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}> <RestaurantCard resCard={restaurant} /> </Link>)
                }
            </div>
        </div>
    )
}

export default ResList;