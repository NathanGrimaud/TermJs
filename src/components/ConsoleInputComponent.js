"use strict";
const React = require("react");
const pageLocation = process.cwd();
const ConsoleOutputComponent = require(`${pageLocation}/dist/components/ConsoleOutputComponent.js`).ConsoleOutputComponent;

export class ConsoleInputComponent extends React.Component {
    
    constructor(props) {
        
        super(props);
        
        this._handleTouch = this.handleTouch.bind(this);
        this._changePath = this.changePath.bind(this);  
          
        this.state = { path : process.cwd() };        
    }
    handleTouch(evt){

        if(evt.key === "Enter")
            this._changePath(process.cwd());
    }
    changePath(path) {
       
        this.state.path = path;
        this.forceUpdate();
    }
    render() {
        
        return (
            <div className="inputWrapper" >
                <span className="inputPath">{this.state.path + " > "} </span>
                <div onKeyPress={this._handleTouch} className="inputDiv" contentEditable="True" id="ConsoleInput" type="text"/>
            </div>
        );
    }
}
