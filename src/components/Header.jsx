import React from 'react';
import menu from '@icons/icon_menu.svg'
import '../styles/Header.scss';
const Header = () => {
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
            Personal Project
            </div>

           

            <div className="navbar-right">
                
                <ul>
                    <li><a href="/">Finance</a></li>

                    <li className="navbar-email">ejemplo@ejemplo</li>
                </ul>
            </div>
        </nav>
    )

}

export default Header;