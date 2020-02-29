import React from 'react';
import '../Static/Login.css';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Logo from '../Static/Photos/logo.png';
import UserIcon from '../Static/Photos/user_icon.png';
import PassIcon from '../Static/Photos/pass_icon.png';
import {Link} from "react-router-dom";

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           info : "ZoicanDenis"
        };
      }

    render(){
        return(
            <div style={{height:"100%"}}>
            <Header />
            <Navbar />   
            <div id="divLogin">
                <div id="divForm" >
                    <div id="divLogoForm">
                        <img id="logoForm" src={Logo} alt="Logo"/>
                    </div>
                    <div id="divFormInfo">
                        <h3 id="loginText">Login to your account </h3>
                        <div>
                            <label class="labelInput">Username</label> <br/>
                            <div class="divInput">
                            <img src={UserIcon} class="icon" alt="User"/>
                            <input class="input" type="text"/>
                            </div>
                        </div>

                        <div>
                            <label class="labelInput">Password</label> <br/>
                            <div class="divInput">
                            <img src={PassIcon} class="icon" alt="Pass"/>
                            <input class="input" type="password"/>
                            </div>
                        </div>

                        <div>
                            <input type="button" value="Login" id="loginButton"/><br/>
                            <Link style={{ textDecoration: 'none' }}><label id="link">Create an account</label> </Link>
                        </div>                        
                    </div>
                </div>
            </div>       
            </div>
        );
    }
}

export default Login;