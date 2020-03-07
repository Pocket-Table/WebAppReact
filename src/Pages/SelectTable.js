import React from 'react';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Canvas from './Canvas.js'
class SearchItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navbar />
                <Canvas width="400" height="400"/>
            </React.Fragment>
        );
    }
}

export default SearchItem;