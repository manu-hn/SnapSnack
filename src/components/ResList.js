import React, { useEffect, useState } from "react";
import { MAIN_URL } from "./utils/EnvVariable";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer/Shimmer";
import { Link } from "react-router-dom";

const ResList = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const [searchText, setSearchText] = useState('')

    async function fetchData() {

        const response = await fetch(MAIN_URL);
        const jsonResp = await response.json();


        setRestaurants(jsonResp?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(jsonResp?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(() => {
        fetchData()
    }, [])

    function topRated(restaurants) {

        const filteredRestaurants = restaurants.filter((restaurant) => {

            return restaurant.info.avgRating > 4
        })
        setRestaurants(filteredRestaurants)
    }

    function filterRestaurants() {
        const filteredList = restaurants.filter((restaurant) => {

            return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())

        })
        setFilteredRestaurants(filteredList)

    }

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


                {console.log(restaurants)}
                {
                    filteredRestaurants.map(restaurant => <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}> <RestaurantCard  resCard={restaurant} /> </Link>)
                }
            </div>
        </div>
    )
}

export default ResList;