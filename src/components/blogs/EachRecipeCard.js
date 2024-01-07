import { Link, useParams } from "react-router-dom";
import useFoodInstructions from "../utils/useFoodInstructions";
import BackToHome from '../assets/BackToHome';

const EachRecipeCard = () => {
    const { recipeID } = useParams();
    const { foodRecipe } = useFoodInstructions(recipeID)

  
    return (
        <div className="w-full flex justify-center border-2 border-black py-6">
             <BackToHome name={"Back To Recipes"} path={"/recipe"} />
            <section className="w-4/5 flex flex-col items-center">
                <div className="flex w-4/6 justify-around my-4">
                    <h1 className="font-bold text-2xl underline-offset-2 underline">{foodRecipe?.strMeal}</h1>
                    <h1 className="font-bold text-2xl underline-offset-2 underline">{foodRecipe?.strCategory}</h1>
                    <h1 className="font-bold text-2xl underline-offset-2 underline">{foodRecipe?.strArea}</h1>
                </div>
                <div className="flex w-4/6 justify-between">
                    <div className="flex flex-col">
                        <img className="w-80" src={foodRecipe?.strMealThumb} alt={``} />
                        <Link className="m-5" to={foodRecipe?.strYoutube}><span className="text-center px-4 py-2 m-8 text-white bg-red-600 rounded-lg">Watch it on YouTube !</span></Link>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Ingredients Required</h3>
                        <ul className="mt-4">
                            <li>{foodRecipe?.strIngredient1}</li>
                            <li>{foodRecipe?.strIngredient2}</li>
                            <li>{foodRecipe?.strIngredient3}</li>
                            <li>{foodRecipe?.strIngredient4}</li>
                            <li>{foodRecipe?.strIngredient5}</li>
                            <li>{foodRecipe?.strIngredient6}</li>
                            <li>{foodRecipe?.strIngredient7}</li>
                            <li>{foodRecipe?.strIngredient8}</li>
                            <li>{foodRecipe?.strIngredient9}</li>
                        </ul>
                    </div>
                </div>
                <div className="w-4/6 text-justify leading-8">
                    <p className="text-center text-gray-500 font-bold">{foodRecipe?.strTags}</p>
                    <p>{foodRecipe?.strInstructions}</p>
                </div>
            </section>
        </div>
    )
}
export default EachRecipeCard;