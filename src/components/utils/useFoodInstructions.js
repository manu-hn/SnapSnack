import axios from "axios";
import { useEffect, useState } from "react";
import { RECIPE_BASED_ON_ID } from "./EnvVariable";



const useFoodInstructions = (recipeID) => {
    const [foodRecipe, setFoodRecipe] = useState(null);

    useEffect(()=>{
        fetchFoodInstructions()
    },[])


    async function fetchFoodInstructions(){
        try {
            const response=await axios.get(RECIPE_BASED_ON_ID +recipeID );
          
            setFoodRecipe(response.data.meals[0]);
        } catch (error) {
            console.log(error)
        }
    }
    return {foodRecipe};
}

export default useFoodInstructions;