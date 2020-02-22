import React from 'react';
import Logo from '../Static/Photos/logo.png';

class Header extends React.Component {
    render() {
        return (
            <header>
                <link rel="icon" href={Logo}></link>
                <link href="https://fonts.googleapis.com/css?family=Allerta+Stencil&display=swap" rel="stylesheet" /> 
            </header>
        );
    }
}

export default Header;