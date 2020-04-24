import React from "react";
import Particles from "react-particles-js";

import Navbar from "../subcomponents/navbar.jsx";

export default class Contact extends React.Component{
    constructor(props){
        super(props);

        this.base = require("../../data/main.json");
        this.list = this.base["contactWays"];
    }
    render(){
        return(
            <div className="contact-container">
                <Particles className = "contact-particles" />
                <div className="main-container-content">
                    <header className="main-header">Contact me</header>
                    <div className="contact-box">
                        <div className="contact-item">Phone: {this.list.phone}</div>
                        <div className="contact-item">Email: {this.list.email}</div>
                        <div className="contact-item">Github: <a href = {this.list.linkToGithub}>SKupisz</a></div>
                        <div className="contact-item">Twitter: <a href = {this.list.linkToTweeter}>granarax</a></div>
                        <div className="contact-item">LinkedIn: <a href = {this.list.linkToLinkedIn}>Simon G. Kupisz</a></div>
                    </div>
                    <Navbar site = "contact"/>
                    
                </div>

            </div>
        );
    }
}