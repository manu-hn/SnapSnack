
const RecipeCard = ({ eachCountryFoodStyle }) => {
    const { strMeal, strMealThumb } = eachCountryFoodStyle;
    return (
        <div className="p-2 rounded-lg w-[100%] border m-1 text-center flex flex-col items-center overflow-hidden">
            <img className="w-56 rounded-lg" src={strMealThumb} alt={strMeal} />
            <h1 className="font-bold text-gray-500 line-clamp-1 ">{strMeal}</h1>

        </div>
    )
}
export default RecipeCard;