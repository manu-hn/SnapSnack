
import Shimmer from '../shimmer/Shimmer';
import { useParams } from 'react-router-dom';
import useMenuCard from '../utils/useMenuCard';
import TopMenu from './cards/TopMenu';
import BottomCards from './cards/BottomCards';


const MenuCard = () => {
    const { resID } = useParams();
    const resMenu = useMenuCard(resID)
    
    if (resMenu === null) return <Shimmer />

    if (resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards) {
        const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        return (
            <div >
                <TopMenu info={resMenu?.cards[0]?.card?.card?.info} />
                <BottomCards itemCards={itemCards} />
            </div>
        )
    } else {
        const { itemCards } = resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

        return (
            <div>
                <TopMenu info={resMenu?.cards[0]?.card?.card?.info} />

                <BottomCards itemCards={itemCards} />
            </div>
        )
    }


}

export default MenuCard;