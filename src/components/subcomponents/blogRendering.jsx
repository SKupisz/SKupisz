import React from "react";
import ReturnTheImage from "./returnTheImage.jsx";

export default class BlogRendering extends React.Component{
    constructor(props){
        super(props);
        console.log("../../data/blogs/blog"+this.props.blogNumber+".json");

        this.base = require("../../data/blogs/blog"+this.props.blogNumber+".json");
        this.items = [];

        this.getTheItems = this.getTheItems.bind(this);
        this.getTheItems();
    }
    getTheItems(){
        let counter = 1;
        let imageConstructor = new ReturnTheImage("");
        while(this.base.hasOwnProperty("item"+counter) != false){
            let tempItem = this.base["item"+counter];
            if(tempItem["type"] == "p"){
                this.items.push(<p className = {tempItem["class"]}>{tempItem["content"]}</p>);
            }
            else if(tempItem["type"] == "image"){
                let imageToLoad = tempItem["src"];
                imageConstructor.changeTheName(imageToLoad);
                this.items.push(<div className = "image-container">
                    <img src = {imageConstructor.returnTheImage()} className = "image"/>
                </div>);
            }
            counter++;
        }
    }
    render(){
        return(<div className="blog-menu">
            <header className="blog-header">{this.base["title"]}</header>
            <section className="article-container">{this.items}</section>
        </div>);
    }
}