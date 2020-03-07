import React from 'react';
import '../Static/Restaurant.css';
import Navbar from '../Components/Navbar';
import {Link} from "react-router-dom";
import axios from 'axios';
import Star from '../Static/Photos/star.png';
import Fb from '../Static/Photos/fb.png';
import Map from '../Static/Photos/maps.png';
/// https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4 -> Slider/Later implementation
export default class Restaurant extends React.Component{
    constructor(props) {
        super(props);
      }

    render(){
        return(
            <React.Fragment>
                <Navbar />
                <div id="MainDivRestaurant">
                    <div id="UpperDiv">
                        <div id="ImgDiv">
                            <img id="Logo" src="https://media.cntraveler.com/photos/5cacaf106c6a90694611589b/master/pass/Nightshade_2019_Frank-Lee_2018-12-14-NightShade-117.jpg"/>
                        </div>
                        <div id="ContactDiv">
                            <label id="Name">Name: </label>
                            <div id="Rating">
                                <img id="star" src={Star} alt="Star"/>
                                <span id="starText">5/5</span>
                                <span id="countReviews"> (205) </span>
                            </div>
                            <div id="Contact">
                                <img id="fb" src={Fb} alt="Fb"/>
                                <img id="maps" src={Map} alt="Maps"/>
                            </div>
                            <label id="Phone">Phone:</label>
                        </div>
                        <div id="ReservationDiv">
                            <div id="Slideshow">
                            
                            </div>
                            <div id="ButtonReservationDiv">
                                <div id="ButtonReservation"> 
                                    <label id="ButtonText" >Reserve</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="BottomDiv">
                        <p id="descr">
                            Este misto
                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
