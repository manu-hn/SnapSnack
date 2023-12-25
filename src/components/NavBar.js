import React, {useState} from "react";
import { Link } from "react-router-dom";

import Logo from "../images/nm-Sizco_400x400.png"
import useOnline from "./utils/useOnline";

const NavBar = () => {
    const [btnName, setBtnName] = useState('Login');
    const online=useOnline();

    return (
        <div className="navbar">
            <div className="logo">
                <img className="logo-img" src={Logo} alt="" />
            </div>
            <div className="navItems">
                <ul>
                    {/* shortcut is windows key + semicolon */}
                    <li>{online ? "🟢" : "🔴"}</li>
                    <li> <Link to={'/'}>Home</Link> </li>
                    <li> <Link to={'/about'}>About</Link> </li>
                    <li> <Link to={'/blog'}>Blog</Link> </li>
                    <li> <Link to={'/contact'}>Contact</Link> </li>
                    <li> Cart</li>
                </ul>
                <button className="btn-nav" onClick={() => {
                    btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                }}>{btnName}</button>
            </div>
        </div>
    )
}

export default NavBar;