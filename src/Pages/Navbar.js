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
                    <li><a class={this.props.tab===1?"active":null} href="/">Home</a></li>
                    <li><a class={this.props.tab===2?"active":null} href="/search">Search</a></li>
                    <li><a class={this.props.tab===3?"active":null} href="/search/1">Empty 1</a></li>
                    <li><a class={this.props.tab===4?"active":null} href="/search/2">Empty 2</a></li>
                    <li><a class={this.props.tab===5?"active":null} href="/search/3">Empty 3</a></li>
                </ul>
            </div>
        );
    }
}

export default Navbar;