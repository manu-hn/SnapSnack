import { useEffect, useState } from 'react'
import Shimmer from '../shimmer/Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from "../utils/EnvVariable"
const MenuCard = () => {

    const [resMenu, setResMenu] = useState(null);
    const { resID } = useParams();

    async function fetchMenu() {
        const menuData = await fetch(MENU_URL + resID)
        const menuJson = await menuData.json();
        console.log(menuJson.data)
        setResMenu(menuJson.data)
    }
    useEffect(() => {
        fetchMenu()

    }, [])

    if (resMenu === null) return <Shimmer />

    const { name, areaName, cuisines, totalRatingsString, sla, feeDetails, avgRating, costForTwoMessage } = resMenu.cards[0].card.card.info;

    const { itemCards } = resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        <div className='menu'>
            <div className='delivery-rating'>
                <div className='delivery'>
                    <h3>{name}</h3>
                    <p>{cuisines.join(', ')}</p>
                    <p>{areaName}</p>
                    <p>{sla.lastMileTravelString}</p>
                    <p>{sla.lastMileTravelString + 's'} ₹ {feeDetails.fees[0].fee / 100}  Delivery fee will apply</p>
                </div>
                <div className='rating'>
                    <div className='inside-rating'>
                        <h3>{avgRating}</h3>
                        <span></span>
                        <p>{totalRatingsString}</p>
                    </div>
                </div>


            </div>
            <main className='main-div'>
                {
                    itemCards.map(res => {
                        return (
                            <div key={res.card.info.id} className='meal-detail'>
                                <h3>{res.card.info.name}</h3>
                                <p>₹{res.card.info.defaultPrice / 100}</p>
                                <h5>{res.card.info.category}</h5>
                                <p>{res.card.info.name}</p>
                            </div>
                        )

                    })
                }
            </main>
        </div>
    )
}

export default MenuCard;