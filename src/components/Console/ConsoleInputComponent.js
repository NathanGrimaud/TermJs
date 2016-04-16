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
        //this._snippetsArray = this._parent.getSnippets();
    }
    insertInput(input){
        this.refs.input.textContent = input;
    }
    handleTouch(evt) {

        if (evt.key === "Enter")
            this.handleEnterTouch(evt);

        else if (evt.key === "Tab")
            this.handleTabTouch(evt);

        else if (evt.key === "ArrowUp")
            this.handleArrowTouch(-1);

        else if (evt.key === "ArrowDown")
            this.handleArrowTouch(+1);
        // c = 67 so whe can handle CTRL-C
        else if (evt.keyCode === 67 && evt.ctrlKey)
            this.handleCtrlCTouch();
        // matching all other possibilities
        else{
          let currentText = this.refs.input.textContent;
          this.refs.hint.innerText = currentText + " : "+this.getPossibleCompletion(currentText);
        }

    }
    handleTabTouch(){
        let currentText = this.refs.input.textContent;
        this.insertInput(this.getPossibleCompletion(currentText));
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
    getPossibleCompletion(currentText){
      let commandNames = this._parent.getSnippets().map((val)=> val.props.name);
      let commands = this._parent.getSnippets().map((val)=> val.props.command);
      return commands.filter((val,index)=>commandNames[index].indexOf(currentText)>-1)[0];
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
                <div ref="hint"></div>
            </div>
        );
    }

}
