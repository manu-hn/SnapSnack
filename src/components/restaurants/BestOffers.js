import useRestaurants from "../utils/useRestaurants";
import { responsive } from "../utils/EnvVariable";
import Shimmer from "../shimmer/Shimmer";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const BestOffers = () => {
    const { resCards } = useRestaurants();


    if(resCards.length===0)return <Shimmer />
    const { info } = resCards[0]?.card?.card?.gridElements?.infoWithStyle;
    console.log("Inside Best ", resCards);
    console.log("Inside Best Info", info);
    return (
        <>
            <Carousel responsive={responsive}>
                
            </Carousel>
        </>
    )
}

export default BestOffers;