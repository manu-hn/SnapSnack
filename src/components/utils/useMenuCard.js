import { useState, useEffect } from "react";
import { MENU_URL } from "../utils/EnvVariable";
import axios from "axios";

const useMenuCard = (resID) => {

    const [resMenu, setResMenu] = useState(null);


    useEffect(() => {
        fetchMenu();
    }, [])

    async function fetchMenu() {
        const axiosMenu = await axios.get(MENU_URL + resID);
       
        setResMenu(axiosMenu.data.data);
       
    }





    return resMenu;
}

export default useMenuCard;