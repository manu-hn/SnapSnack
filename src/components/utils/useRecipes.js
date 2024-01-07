import { useEffect, useState } from "react";
import { FOOD_API } from "./EnvVariable";
import axios from "axios";

const useRecipes = () => {
    const [foodBasedOnCountries, setFoodBasedOnCountries] = useState()
  const [typeOfArea, setTypeOfArea] = useState('Indian');

    useEffect(() => {
        fetchRecipes()
    },[typeOfArea])

    async function fetchRecipes(){
        try {
            const response =await axios.get(FOOD_API + typeOfArea);
            console.log("Helloo",response.data.meals)
            setFoodBasedOnCountries(response?.data?.meals)
        } catch (error) {
            console.log(error.message)
        }
    }

    console.log("inside hook ",foodBasedOnCountries)
    return {foodBasedOnCountries, setTypeOfArea};
}

export default useRecipes;