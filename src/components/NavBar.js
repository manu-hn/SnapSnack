import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/nm-Sizco_400x400.png"
import useOnline from "./utils/useOnline";

const NavBar = () => {
    const [btnName, setBtnName] = useState('Login');
    const online = useOnline();

    function colorGiver(){
        if(online){
            return "green"
        }
        return "red"
    }

    return (
        <div className="flex w-full border-2 justify-between items-center flex-col">

            <div className="flex w-full border-2 justify-between items-center px-8">
                <div className="">
                    <img className="w-28" src={Logo} alt="" />
                </div>
                <div className="flex mx-8">
                    <ul className="flex">
                        {/* shortcut is windows key + semicolon */}
                        <li className="mx-4 "> <Link to={'/'}>Home</Link> </li>
                        <li className="mx-4 "> <Link to={'/about'}>About</Link> </li>
                        <li className="mx-4 "> <Link to={'/blog'}>Blog</Link> </li>
                        <li className="mx-4 "> <Link to={'/contact'}>Contact</Link> </li>
                        <li className="mx-4 "> Cart</li>
                    </ul>
                    <button className="btn-nav" onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }}>{btnName}</button>
                </div>
            </div>
            <div className="h-[0.15rem] w-full" style={{backgroundColor :colorGiver()}}></div>
        </div>
    )
}

export default NavBar;