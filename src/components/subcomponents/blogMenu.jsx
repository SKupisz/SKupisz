import React from "react";
import {Link} from "react-router-dom";

export default class BlogMenu extends React.Component{
    constructor(props){
        super(props);

        this.blogList = require("../../data/blogs/list.json");
    }
    render(){
        return(<div className="blog-menu">
            <header className="blog-mainHeader">Blog</header>
            <section className="blogs-container">
                {this.blogList["blogsData"].map((data,i) => 
                    <Link to = {"/blog/"+data[2]}>
                    <div className={"blog-anchor blog"+(i+1)}>
                        <header className="blog-header">{data[0]}</header>
                        <div className="blog-shortDesc">{data[1]}</div>
                    </div>
                </Link>
                )}

            </section>
        </div>);
    }
}