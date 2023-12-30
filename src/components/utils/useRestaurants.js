import { useState, useEffect } from "react";
import { MAIN_URL } from "../utils/EnvVariable.js";


const useRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const response = await fetch(MAIN_URL);
        const jsonResp = await response.json();

        setRestaurants(jsonResp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
        setFilteredRestaurants(jsonResp?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    

    return {restaurants, filteredRestaurants, setRestaurants, setFilteredRestaurants}

}

export default useRestaurants;