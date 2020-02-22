import React from 'react';
import '../Static/RestaurantSearch.css';
import Navbar from './Navbar';
import Header from './Header';

class RestaurantSearch extends React.Component {
    render(){
        return(
            <React.Fragment>
                <Header />
                <Navbar />
                <h1 id="title">Search page</h1>
            </React.Fragment>
        );
    }
}

export default RestaurantSearch;