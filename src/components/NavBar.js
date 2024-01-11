import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logoutUser } from "./store/userLoginSlice.js";
import Logo from "../images/MainLogo.png"
import useOnline from "./utils/useOnline";
import { useDispatch, useSelector } from "react-redux";
import useRestaurants from "./utils/useRestaurants.js";


const NavBar = () => {
    const [location, setLocation] = useState('Bengaluru')
    const dispatch = useDispatch();
    const online = useOnline();
    const cartItems = useSelector((store) => store.cart.items);
    const userInfo = useSelector((store) => store.userInfo.isLoggedIn);
    const{fetchLatAndLong}=useRestaurants()

   

    function colorGiver() {
        if (online) {
            return "green"
        }
        return "red"
    }
    const logoutHandler = () => {
        dispatch(logoutUser());
    }

    return (
        <div className="flex w-full px-2 py-2 bg-orange-500 justify-between items-center flex-col">

            <div className="flex w-full justify-evenly items-center px-8">
                <div className="">
                    <img className="w-28" src={Logo} alt="" />
                </div>
                <div>
                    <input className="bg-transparent border-b-2 border-slate-100 placeholder:text-slate-200 px-4" type="text" name="location" id="location" placeholder="Bengaluru, Karnataka " onChange={(e) => setLocation(e.target.value)} />
                    <button className="px-6 py-1 rounded-lg border ml-4" onClick={()=>fetchLatAndLong(location)} >Search</button>
                </div>
                <div className="flex mx-8">
                    <ul className="flex items-center">
                        {/* shortcut is windows key + semicolon */}
                        <li className="mx-4 "> <Link to={'/'}>Home</Link> </li>
                        <li className="mx-4 "> <Link to={'/about'}>About</Link> </li>
                        <li className="mx-4 "> <Link to={'/recipe'}>Recipes</Link> </li>
                        <li className="mx-4 "> <Link to={'/contact'}>Contact</Link> </li>
                        <li className="mx-4 "> <Link to={'/cart'}> 🛒{cartItems.length}</Link> </li>
                        <li className="mx-4"> {userInfo ? <button onClick={logoutHandler}>Logout</button> : <Link to={'/login'}>Login</Link>} </li>
                        <li className="mx-4 h-3 w-3" style={{ backgroundColor: colorGiver() }}></li>

                    </ul>

                </div>

            </div>
        </div>
    )
}

export default NavBar;