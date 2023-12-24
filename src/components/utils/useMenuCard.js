import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/EnvVariable"

const useMenuCard = (resID) => {

    const [resMenu, setResMenu] = useState(null);


    useEffect(() => {
        fetchMenu();
    }, [])

    async function fetchMenu() {
        const menuData = await fetch(MENU_URL + resID)
        const json = await menuData.json();
        console.log("Hello ", json)
        setResMenu(json.data)
    }


    return resMenu;
}

export default useMenuCard;