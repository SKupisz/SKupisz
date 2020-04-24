import React from "react";
import Particles from "react-particles-js";
import Typing from "react-typing-animation";
import {Link} from "react-router-dom";
import {Saturn} from "../../img/saturn.jpg";

import Navbar from "../subcomponents/navbar.jsx";

export default class Welcome extends React.Component{
    constructor(props){
        super(props);

        this.site = this.props.site;

        this.base = require("../../data/main.json");
        this.firstDescription = this.base["firstDesc"];
    }
    render(){
        return(            
    <div className="first-description">
        <div className="description-container">
            {this.site == "welcome" ?               <Typing speed = {10} startDelay = {2500} className = "description-container-content">
                  <span className = "description-container-title">Who I am?</span>
                  <span>{this.firstDescription}</span>
              </Typing> :               <div className = "description-container-content">
                  <span className = "description-container-title">Who I am?</span>
                  <span>{this.firstDescription}</span>
              </div>}

            <Particles className = {this.site == "welcome" ? "description-container-particles description-particles-animation": "description-container-particles"}/>
            <Navbar site = {this.site}/>
        </div>
        <div className={this.site == "welcome" ? "description-continue description-continue-animation": "description-continue"}></div>
      </div>);
    }
}