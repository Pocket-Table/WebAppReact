import React from 'react';
import '../Static/RestaurantSearch.css';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';

class RestaurantSearch extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header />
                <Navbar tab={2}/>
                <h1 id="title">Search page</h1>
            </React.Fragment>
        );
    }
}

export default RestaurantSearch;