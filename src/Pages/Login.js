import React from 'react';
import '../Static/Login.css';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import Logo from '../Static/Photos/logo.png';
import UserIcon from '../Static/Photos/user_icon.png';
import PassIcon from '../Static/Photos/pass_icon.png';
import {Link} from "react-router-dom";
import axios from 'axios';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           username:"",
           password:""
        };
      }

    submit(e){
        console.log(" - "+this.state.username+" - "+this.state.password);
        e.preventDefault();
        axios.post('http://localhost:8080/authenticate',
        {
            username:this.state.username,
            password:this.state.password
        }).then((res)=>localStorage.setItem('jwt-auth',res.data.jwt));
    }

    change(e){
        this.setState({
            [e.target.name]:e.target.value
        });
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
                            <input class="input" name="username" type="text" onChange={e => this.change(e)} />
                            </div>
                        </div>

                        <div>
                            <label class="labelInput">Password</label> <br/>
                            <div class="divInput">
                            <img src={PassIcon} class="icon" alt="Pass"/>
                            <input class="input" name="password" type="password" onChange={e => this.change(e)}/>
                            </div>
                        </div>

                        <div>
                            <input type="button" onClick={e => this.submit(e)} value="Login" id="loginButton"/><br/>
                            <Link to="\test" style={{ textDecoration: 'none' }}><label id="link">Create an account</label> </Link>
                        </div>                        
                    </div>
                </div>
            </div>       
            </div>
        );
    }
}

export default Login;