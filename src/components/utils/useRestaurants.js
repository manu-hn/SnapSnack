import { useState, useEffect } from "react";
import { MAIN_URL, MAIN_BEFORE_LAT, MAIN_AFTER_LON, MAIN_URL_MID, LONG_LAT_API_FIRST, LAT_LONG_API_KEY } from "../utils/EnvVariable.js";
import axios from "axios";


const useRestaurants = (initialLatitude = '12.9351929', initialLongitude = '77.62448069999999') => {
    const [latitude, setLatitude] = useState(initialLatitude);
    const [longitude, setLongitude] = useState(initialLongitude);
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [bestRestaurants, setBestRestaurants] = useState([]);
    const [whatsOnYourMind, setWhatsOnTourMind] = useState(null);
    const [topResChains, setTopResChains] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    async function fetchData() {
        try {

            const response = await axios.get(MAIN_BEFORE_LAT + latitude + MAIN_URL_MID + longitude + MAIN_AFTER_LON);
    
            const bestCuisines = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'restaurant_near_me_links')
            const whatsOnYourMind = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'whats_on_your_mind');
            const topChains = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'top_brands_for_you');
            const topRestaurantsChains = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'restaurant_grid_listing');
            const popularRestaurantsTitle = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'popular_restaurants_title');

            const threeMergedArray = topChains.concat(topRestaurantsChains, popularRestaurantsTitle);

            setRestaurants(topChains[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(topChains[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setBestRestaurants(bestCuisines);
            setWhatsOnTourMind(whatsOnYourMind);
            setTopResChains(threeMergedArray);

        } catch (error) {
            console.log(error)
        }

    }

    return {
        filteredRestaurants, setRestaurants,
        setFilteredRestaurants, bestRestaurants,
        whatsOnYourMind, topResChains, setLatitude, setLongitude, latitude, longitude, fetchData
    }
}

export default useRestaurants;