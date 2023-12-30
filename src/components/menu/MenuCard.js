
import Shimmer from '../shimmer/Shimmer';
import { useParams } from 'react-router-dom';
import useMenuCard from '../utils/useMenuCard';
import TopMenu from './cards/TopMenu';
import BottomCards from './cards/BottomCards';
import { useEffect, useState } from 'react';


const MenuCard = () => {

    const { resID } = useParams();
    const resMenu = useMenuCard(resID);
    // console.log(resMenu.cards[2].groupedCard.cardGroupMap.REGULAR.cards)

    if (resMenu === null) return <Shimmer />

    return (
        <div className='flex flex-col justify-center items-center w-full mt-8'>
            <div className='w-[70%] flex items-center'>
                <TopMenu info={resMenu.cards[0].card.card.info} />
            </div>
            
            <div className='w-[70%] flex items-center mt-16'  >

                <BottomCards itemCards={resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards} />
            </div>

        </div>
    )





}

export default MenuCard;