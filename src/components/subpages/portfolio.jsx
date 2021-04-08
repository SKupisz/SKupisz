import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import validateColor from 'validate-color';
import {css} from "glamor";
import {Link} from "react-router-dom";

export default class Portfolio extends React.Component{
    constructor(props){
        super(props);

        this.inputRef = React.createRef();
        this.outputRef = React.createRef();
        this.consoleContentRef = React.createRef();

        this.executeTheCommand = this.executeTheCommand.bind(this);
        this.changeTheColor = this.changeTheColor.bind(this);

        this.base = require("../../data/console.json");
        this.projects = this.base["projects"];
        this.skills = this.base["skills"];

        this.state = {
            consoleOutput: [<div className = "command-container">> Portfolio console...</div>,
            <div className = "command-container">> Use the command input to know more about me...</div>,
            <div className = "command-container">> For more informations type help...</div>]
        }
    }

    executeTheCommand(){
        let command = this.inputRef.current.value, commandForPaste = ">> "+this.inputRef.current.value;
        let response = "", flag = 0;
        if(command === "help"){
            response = "help initialized";
            flag = 2;
        }
        else if(command === "clear"){
            response = "";
            flag = 1;
            this.setState({consoleOutput: [<div className = "command-container">> Console cleared</div>]}, () => {});
        }
        else if(command === "exit"){
            flag = 5;
            let helping = this.state.consoleOutput;
            let toAdd = [<div className = "command">>> exit</div>,
            <div className="command-container">> Where would you like to go to?</div>,
            <div className="command-container">> <Link to = "/main" className = "command-link">Main site</Link></div>,
            <div className="command-container">> <Link to = "/blog" className = "command-link">Blog site</Link></div>,
            <div className="command-container">> <Link to = "/contact" className = "command-link">Contact site</Link></div>];
            for(let i = 0 ; i < toAdd.length; i++){
                helping.push(toAdd[i]);
            }
            this.setState({consoleOutput: helping}, () => {});
        }
        else{
            command = command.split(" ");
            if(command[0] === "chfz"){
                if(command.length < 2){
                    response = "Command unknown";
                }
                else{
                    if(command[1] === "-b"){
                        if(this.outputRef.current.classList.contains("bigger-font-size") === true){
                            response = "Font size already changed"; 
                        }
                        else{
                            this.outputRef.current.classList.add("bigger-font-size");
                            this.outputRef.current.classList.remove("lower-font-size");
                            response = "Font size changed to bigger"; 
                        }
   
                    }
                    else if(command[1] === "-m"){
                        this.outputRef.current.classList.remove("bigger-font-size");
                        this.outputRef.current.classList.remove("lower-font-size");
                        response = "Font size changed";    
                    }
                    else if(command[1] === "-l"){
                        if(this.outputRef.current.classList.contains("lower-font-size") === true){
                            response = "Font size already changed"; 
                        }
                        else{
                            this.outputRef.current.classList.remove("bigger-font-size");
                            this.outputRef.current.classList.add("lower-font-size");         
                            response = "Font size changed";  
                        }
             
                    }
                    else{
                        response = "Command unknown";
                    }
                }
            }
            else if(command[0] === "show"){
                if(command.length < 2){
                    response = "Missing flag. Type help to know more";
                }
                else{
                    if(command[1] === "--projects"){
                        flag = 4;
                        let projectsHelping = this.state.consoleOutput;
                        projectsHelping.push(<div className = "command">{commandForPaste}</div>);
                        this.projects.map((data,i) => projectsHelping.push(<div className = "project-container">
                            <header className="project-name">{(i+1)+") "+data[0]} </header>
                            <div className="project-duration">
                                {data[1]} - {data[2]}
                            </div>
                            <div className="project-website"><a href = {data[3]}>{data[3]}</a></div>
                            <div className="project-role">Role: {data[4]}</div>
                        </div>));
                        this.setState({consoleOutput: projectsHelping}, () => {});
                    }
                    else if(command[1] === "--skills"){
                        flag = 4;
                        let projectsHelping = this.state.consoleOutput;
                        projectsHelping.push(<div className = "command">{commandForPaste}</div>);
                        this.skills.map(data=> projectsHelping.push(<div className = {data.indexOf(":") === -1 ? "skill-container": "skill-container section-introducing-container"}>
                            {data}
                        </div>));
                        this.setState({consoleOutput: projectsHelping}, () => {});
                    }
                    else{
                        response = "Command unknown";
                    }
                }
            }
            else if(command[0] === "chcc"){
                if(command.length < 2){
                    response = "Command unknown";
                }
                else{
                    if(command[1] === "--reset"){
                        this.consoleContentRef.current.classList = ["console-content"];
                        response = "Color reseted";
                    }
                    else if(validateColor(command[1]) !== null){
                        let res = this.changeTheColor(command[1]);  
                        response = res;
                    }
                    else{
                        response = "Command unknown";
                    }
                }
            }
            else{
                response = "Command unknown";
            }
            
        }
        if(flag !== 1 && flag !== 4 && flag !== 5){
            let helping = this.state.consoleOutput;
            helping.push(<div className = "command">{commandForPaste}</div>);
            this.setState({consoleOutput: helping}, () => {});
            if(flag === 0 || flag === 2){
                helping.push(<div className = "command-container">{response}</div>);
                this.setState({consoleOutput: helping}, () => {});           
            }
            if(flag === 2){
                this.base["helpCommands"].map(info => helping.push(<div className = "command-container">{info[0]+" : "+info[1]}</div>));
                this.setState({consoleOutput: helping}, () => {});
            }
        }

        
        this.inputRef.current.value = "";
    }

    changeTheColor(colorToAdd){
        let newColor = css({
            color: colorToAdd+" !important"
        });
        this.consoleContentRef.current.classList.add(newColor);
        return ["Color changed to "+colorToAdd];
    }

    render(){
        return(<div className="portfolio-content">
            <header className="portfolio-header">Welcome to the story of my career...</header>
            <section className="console-content" ref = {this.consoleContentRef}>
            <ScrollToBottom className="console-output-container" scrollViewClassName = "console-output-scroll" ref = {this.outputRef}>
                {this.state.consoleOutput}
            </ScrollToBottom>
                <div className="console-input-container">
                    <span className="enter-sign">></span>
                    <input type="text" name="" id="" className="console-input" ref = {this.inputRef} onKeyPress = {event => {
                    if(event.key === "Enter"){
                        this.executeTheCommand()
                    }}}/>
                </div>
            </section>
        </div>);
    }
}