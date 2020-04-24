import React from "react";
import {Link} from "react-router-dom";

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.site = this.props.site;
    }
    render(){
        return(            <nav className={this.site == "welcome" ? "main-navbar animated-navbar": this.site == "contact"? "main-navbar not-margined": "main-navbar"}>
        <Link to = "/main"><button className="nav-item">Main site</button></Link>
        <Link to = "/portfolio"><button className="nav-item">Portfolio</button></Link>
        <Link to = "/blog"><button className="nav-item">Blog</button></Link>
        <Link to = "/contact"><button className="nav-item">Contact me</button></Link>
            </nav>);
    }
}