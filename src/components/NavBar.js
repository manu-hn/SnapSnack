import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/MainLogo.png"
import useOnline from "./utils/useOnline";
import { useSelector } from "react-redux";

const NavBar = () => {
    const [btnName, setBtnName] = useState('Login');
    const online = useOnline();
    const cartItems = useSelector((store) => store.cart.items);
    console.log("NavbaR", cartItems)

    function colorGiver() {
        if (online) {
            return "green"
        }
        return "red"
    }

    return (
        <div className="flex w-full px-2 py-2 bg-orange-500 justify-between items-center flex-col">

            <div className="flex w-full justify-between items-center px-8">
                <div className="">
                    <img className="w-28" src={Logo} alt="" />
                </div>
                <div className="flex mx-8">
                    <ul className="flex items-center">
                        {/* shortcut is windows key + semicolon */}
                        <li className="mx-4 "> <Link to={'/'}>Home</Link> </li>
                        <li className="mx-4 "> <Link to={'/about'}>About</Link> </li>
                        <li className="mx-4 "> <Link to={'/blog'}>Blog</Link> </li>
                        <li className="mx-4 "> <Link to={'/contact'}>Contact</Link> </li>
                        <li className="mx-4 "> <Link to={'/cart'}> 🛒{cartItems.length}</Link> </li>
                        <li>
                            <button className="" onClick={() => {
                                btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                            }}>{btnName}</button>
                        </li>
                        <li className="mx-4 h-3 w-3" style={{ backgroundColor: colorGiver() }}></li>

                    </ul>

                </div>

            </div>
        </div>
    )
}

export default NavBar;