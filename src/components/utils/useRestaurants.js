import { useState, useEffect } from "react";
import { MAIN_URL, MAIN_BEFORE_LAT, MAIN_AFTER_LON, MAIN_URL_MID, LONG_LAT_API_FIRST, LAT_LONG_API_KEY } from "../utils/EnvVariable.js";
import axios from "axios";


const useRestaurants = () => {
    const [latitude, setLatitude] = useState('12.971599');
    const [longitude, setLongitude] = useState('77.594566');


    const [resCards, setResCards] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [bestRestaurants, setBestRestaurants] = useState([]);
    const [whatsOnYourMind, setWhatsOnTourMind] = useState(null);
    const [topResChains, setTopResChains] = useState(null);

    useEffect(() => {

        fetchData();

    }, [location]);

    async function fetchLatAndLong(location) {
        console.log("Location ", location)
        const response = await axios.get(LONG_LAT_API_FIRST + location.toLowerCase() + LAT_LONG_API_KEY)
        const { lat, lon } = response?.data[0]
        setLatitude(lat);
        setLongitude(lon)
       
    }

    async function fetchData() {

        const response = await axios.get(MAIN_BEFORE_LAT + latitude + MAIN_URL_MID + longitude + MAIN_AFTER_LON);

        const totalRestaurants = response?.data?.data?.cards?.map((restaurant) => restaurant).filter((res) => res?.card?.card?.id === 'top_brands_for_you')
        const bestCuisines = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'restaurant_near_me_links')
        const whatsOnYourMind = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'whats_on_your_mind');
        const topChains = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'top_brands_for_you');
        const topRestaurantsChains = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'restaurant_grid_listing');
        const popularRestaurantsTitle = response?.data?.data?.cards?.map(cuisine => cuisine).filter(bestCuisine => bestCuisine?.card?.card?.id === 'popular_restaurants_title');


        const threeMergedArray = topChains.concat(topRestaurantsChains, popularRestaurantsTitle);

        setResCards(response.data.data.cards)
        setRestaurants(totalRestaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(totalRestaurants[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setBestRestaurants(bestCuisines);
        setWhatsOnTourMind(whatsOnYourMind);
        setTopResChains(threeMergedArray);
       

    }

    return {
        restaurants, filteredRestaurants, setRestaurants,
        setFilteredRestaurants, bestRestaurants, resCards,
        whatsOnYourMind, topResChains, fetchLatAndLong,
    }
}

export default useRestaurants;