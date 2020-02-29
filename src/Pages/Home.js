import React from 'react';
import '../Static/Home.css';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Navbar tab={1}/>
                <h1 id="title">Home page</h1>
            </React.Fragment>
        );
    }
}

export default Home;