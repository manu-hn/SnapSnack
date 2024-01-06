import { useEffect, useState } from "react";
import VegOnly from "./VegOnly";
import Shimmer from "../../shimmer/Shimmer";
import SectionCard from "./SectionCard";

const BottomCards = ({ itemCards }) => {
    const [menuList, setMenuList] = useState(null);
    // const [showIndex, setShowIndex]=useState(null);

    useEffect(() => {
        menuCards()
    }, [])

    function menuCards() {
        const data = itemCards.map((menu) => menu).filter(items => {
            return items.card.card.itemCards
        })
        setMenuList(data);
    }

    if (menuList === null) return <Shimmer />
    return (
        <div className="w-full flex border border-black flex-col items-center justify-center">
    
            {
                menuList.map((display, index) => {
                    return <SectionCard key={display.card.card.title}
                     listInfo={display.card.card}                     
                      />
                })
            }
        </div>

    )
}

export default BottomCards;