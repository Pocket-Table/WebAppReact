import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

class SearchItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navbar />
                <h1 id="title">Search item : {this.props.match.params.id}</h1>
            </React.Fragment>
        );
    }
}

export default SearchItem;