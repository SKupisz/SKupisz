import React from "react";
import {Route,Link} from "react-router-dom";

import BlogMenu from "../subcomponents/blogMenu.jsx";
import BlogRendering from "../subcomponents/blogRendering.jsx";

export default class Blog extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="blog-content">
            <Route exact path = "/blog" component = {BlogMenu}/>
            <Route exact path = "/blog/my-programming-books" component = {() => <BlogRendering blogNumber = "1" />}/>
            <Route exact path = "/blog/react-worth-to-learn-our-not" component = {() => <BlogRendering blogNumber = "2" />}/>
        </div>);
    }
}