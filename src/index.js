import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RestaurantSearch from './Pages/RestaurantSearch';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SelectTable from './Pages/SelectTable';
import Restaurant from './Pages/Restaurant';
import SearchItem from './Pages/SearchItem';

ReactDOM.render(
<React.Fragment>
<BrowserRouter>

<Switch>
<Route exact path="/" component={Home} />
<Route path="/login" component={Login} /> 
<Route path="/search/:id" component={SearchItem} /> 
<Route path="/search" component={RestaurantSearch} />
<Route path="/canvas" component={SelectTable} />  
<Route path="/restaurant" component={Restaurant} /> 

</Switch>

</BrowserRouter>
</React.Fragment>, 
document.getElementById('root'));

serviceWorker.unregister();
