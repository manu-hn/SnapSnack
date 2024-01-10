import { useState, useEffect } from "react";
import { MAIN_URL } from "../utils/EnvVariable.js";
import axios from "axios";


const useRestaurants = () => {
    const[resCards, setResCards]=useState([]);
   
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [bestRestaurants, setBestRestaurants]=useState([]);
    const [bestCuisines, setBestCuisines]=useState([]);
    const [exploreRes, setExploreRes]=useState([]);
    


    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {

        const response = await axios.get(MAIN_URL);
      setResCards(response.data.data.cards)
        setRestaurants(response.data.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(response.data.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setBestRestaurants(response.data.data.cards[7].card.card);
        setBestCuisines(response.data.data.cards[8].card.card);
        setExploreRes(response.data.data.cards[9].card.card);
       console.log(response.data.data)
    }

    return { restaurants, filteredRestaurants, setRestaurants, setFilteredRestaurants, bestRestaurants, bestCuisines, exploreRes, resCards }

}

export default useRestaurants;