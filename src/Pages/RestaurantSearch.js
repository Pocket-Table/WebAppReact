import React from 'react';
import '../Static/RestaurantSearch.css';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import { getJwt } from '../Helpers/jwt';
import axios from 'axios';

class RestaurantSearch extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
    }

    componentDidMount(){
        const jwt = getJwt();
        if(!jwt){
            this.props.history.push("/Login");
        }

        console.log("Este "+jwt);
        axios.get('http://localhost:8080/getItems',{headers:{'Authorization':'Bearer '+jwt}}).then(
            (res) => {
                console.log("Res este "+res);
                localStorage.removeItem('jwt-auth');
                this.setState({
                    list:res.data
                });
            }
        ).catch( (err) => {
            console.log(err);
            this.props.history.push("/Login");
        });

        console.log(this.state);
    }

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