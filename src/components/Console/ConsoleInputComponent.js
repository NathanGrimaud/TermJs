"use strict";

const React = require("react");

//const ConsoleOutputComponent = require(`./ConsoleOutputComponent.js`).ConsoleOutputComponent;

export class ConsoleInputComponent extends React.Component {

    /**
     * @constructor
     * @param {Object} props - contains { process: Process, parent : ConsoleComponent }
     */
    constructor(props) {

        super(props);
        this._process = props.process;
        this._parent = props.parent;
        this._inputText = "";
        this._currentLine= "";
        this._history= [];
        this._historyIndex= 0;

    }
    insertInput(input){
        this.refs.input.textContent = input;
    }
    handleTouch(evt) {

        if (evt.key === "Enter")
            this.handleEnterTouch(evt);

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

        let nextIndex = this._historyIndex + i;
        if (( nextIndex >= 0) && ( nextIndex <= this._history.length)) {

            this._historyIndex += i;
            this.refs.input.textContent = this._history[nextIndex];
        }
    }
    handleEnterTouch(evt) {

        let command = evt.target.textContent;
        this._historyIndex += 1;
        this._history.push(command);
        evt.target.textContent = "";
        this.changePath(process.cwd());
        this._process.exec(command);

    }
    changePath(path) {

        this._path = path;
        this.forceUpdate();
    }
    render() {

        return (
            <div className="inputWrapper" >
                <span className="inputPath">{ process.cwd() + " > "} </span>
                <div ref="input" onKeyDown={(evt) => this.handleTouch(evt) } className="inputDiv" contentEditable="True" id="ConsoleInput" type="text"/>
            </div>
        );
    }

}
