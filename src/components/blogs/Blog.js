import React, { useState } from 'react'
import RecipeCard from './RecipeCard';
import useRecipes from '../utils/useRecipes';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PleaseLoginToContinue from '../auth/PleaseLoginToContinue';

const Blog = () => {
  const {foodBasedOnCountries, setTypeOfArea}= useRecipes();
  const userInfo=useSelector((store)=>store.userInfo.isLoggedIn);

  function handleTypeOfFoodChange(e){
    
    setTypeOfArea(e.target.value);
  }
 
  return userInfo ? (
    <div className='flex flex-col justify-center items-center w-full'>
     
      <div className='m-4'>
             
        <span>
          <select className='w-72 bg-gray-200 bg-opacity-50 px-3 py-1 rounded-md' onChange={handleTypeOfFoodChange} name="" id="">
            <option value="Indian">Indian</option>
            <option value="Russian">Russian</option>
            <option value="French">French</option>
            <option value="American">American</option>
            <option value="British">British</option>
            <option value="Canadian">Canadian</option>
            <option value="Chinese">Chinese</option>
            <option value="Croatian">Croatian</option>
            <option value="Dutch">Dutch</option>
            <option value="Egyptian">Egyptian</option>
            <option value="Filipino">Filipino</option>
            <option value="Greek">Greek</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Jamaican">Jamaican</option>
            <option value="Kenyan">Kenyan</option>
            <option value="Malaysian">Malaysian</option>
            <option value="Mexican">Mexican</option>
            <option value="Spanish">Spanish</option>
            <option value="Turkish">Turkish</option>
            <option value="Unknown">Others</option>
          </select>
        </span>
      </div>

      <div className='flex w-4/5 flex-wrap justify-evenly'>
        {
          foodBasedOnCountries?.map(eachCountryFoodStyle=><Link key={eachCountryFoodStyle.idMeal} to={`/recipe/${eachCountryFoodStyle.idMeal}`}><RecipeCard  eachCountryFoodStyle={eachCountryFoodStyle} /></Link> )
        }
      </div>
    </div>
  ) : (<PleaseLoginToContinue />)
}

export default Blog