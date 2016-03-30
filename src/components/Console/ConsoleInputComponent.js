"use strict";

const React = require("react");

const ConsoleOutputComponent = require(`./ConsoleOutputComponent.js`).ConsoleOutputComponent;

export class ConsoleInputComponent extends React.Component {

    /**
     * @constructor
     * @param {Object} props - contains { process: Process, parent : ConsoleComponent }
     */
    constructor(props) {

        super(props);
        this._process = props.process;
        this._parent = props.parent;
        
        this.state = {
            path: process.cwd(),
            inputText : "",
            currentLine: "",
            history: [],
            historyIndex: 0
        };
    }
    render() {

        return (
            <div className="inputWrapper" >
                <span className="inputPath">{this.state.path + " > "} </span>
                <div ref="input" onKeyDown={(evt) => this.handleTouch(evt) } className="inputDiv" contentEditable="True" id="ConsoleInput" type="text"/>
            </div>
        );
    }
    insertInput(input){      
        this.refs.input.textContent = input;
    }
    handleTouch(evt) {
        
        if (evt.key === "Enter")
            this.handleEnterTouch(evt)

        else if (evt.key === "ArrowUp")
            this.handleArrowTouch(-1);

        else if (evt.key === "ArrowDown")
            this.handleArrowTouch(+1);
        // c = 67    
        else if (evt.keyCode === 67 && evt.ctrlKey)
            this.handleCtrlCTouch();

    }
    handleCtrlCTouch(){      
        
        this.refs.input.textContent = "";
        this._parent.insertOutput("command stopped by keyboard");
        this._process.stopCommand();
    }
    handleArrowTouch(i) {

        let nextIndex = this.state.historyIndex + i;
        if (( nextIndex >= 0) && ( nextIndex <= this.state.history.length)) {
            
            this.state.historyIndex += i;
            this.refs.input.textContent = this.state.history[nextIndex];
        }
    }
    handleEnterTouch(evt) {
        
        let command = evt.target.textContent;  
        this.state.historyIndex += 1;
        this.state.history.push(command);
        evt.target.textContent = "";
        this.changePath(process.cwd());
        this._process.exec(command);

    }
    changePath(path) {

        this.state.path = path;
        this.forceUpdate();
    }

}
