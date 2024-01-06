import useRestaurants from "../utils/useRestaurants";

const BestRestaurants = ({ bestRestaurants }) => {
    const { title, brands } = bestRestaurants


    console.log(" Best ", brands)
    return (
        <div className="w-full flex justify-center ">
            <div className=" w-[85%] border border-black">
                <h1 className="font-bold text-2xl my-3 mx-4">{title}</h1>
                <section className="flex flex-wrap justify-evenly">
                    { brands.map(brand=><div key={brand.text} className="border rounded-xl m-4 px-4 py-3 w-72 text-center overflow-hidden">
                        <h1 className="line-clamp-1 text-gray-700 text-base font-medium">{brand.text}</h1>
                        </div>)}
                </section>
            </div>
        </div>
    )
}

export default BestRestaurants;