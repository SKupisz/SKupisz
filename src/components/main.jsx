import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Welcome from "./subpages/welcome.jsx";

import "../css/main.scss";

export default class Main extends React.Component{
    render(){
        return(
            <section className="main-content">
                <Router>
                    <Route exact path = "/" component = {() => <Welcome site = "welcome"/>}/>
                    <Route exact path = "/main" component = {() => <Welcome site = "direct"/>}/>
                </Router>
          </section>
        );
    }
}
/*                {this.isSCSSLoaded() == true ?                 
                <Router>
                    <Route exact to = "/" component = {Welcome}/>
            </Router> : <h1>Loading...</h1>} */