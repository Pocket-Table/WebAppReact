import React from 'react';
import '../Static/Navbar.css';
import Logo from '../Static/Photos/logo.png';



class Navbar extends React.Component {
    render() {
        return (
            <div id="mainDiv">
                <div id="divLogo">
                <img id="logo" src={Logo} alt="Logo"/>
                </div>
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#RestauranSearch">Search</a></li>
                    <li><a href="#RestaurantSearch/1">Empty 1</a></li>
                    <li><a href="#RestaurantSearch/2">Empty 2</a></li>
                    <li><a href="#RestaurantSearch/3">Empty 3</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;