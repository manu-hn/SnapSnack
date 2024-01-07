import useRestaurants from "../utils/useRestaurants";
import BannerShimmer from "../shimmer/BannerShimmer.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BANNER_URL } from "../utils/EnvVariable";
import { settings } from "../utils/EnvVariable";


const BestOffers = () => {
    const { resCards } = useRestaurants();



    if (resCards.length === 0) return <BannerShimmer />
    const { info } = resCards[0]?.card?.card?.gridElements?.infoWithStyle;
    
    return (
        <>
            <div className="w-[80vw] h-[20rem] mb-3 mt-4">
                <h2 className="my-6 font-bold text-2xl"> Best offers for you </h2>
                <Slider className=" flex" {...settings}>

                    {
                        info.map((banner) => (<div key={banner.id} className="w-[20rem]">
                            <img className="w-[28rem] mx-2" src={BANNER_URL + banner.imageId} alt="" />
                        </div>))
                    }
                </Slider>
            </div>
        </>
    )
}

export default BestOffers;