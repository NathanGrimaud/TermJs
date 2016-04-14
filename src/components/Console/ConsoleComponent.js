"use strict";

const React = require("react");

const ConsoleOutputComponent = require(`./ConsoleOutputComponent.js`).ConsoleOutputComponent;
const ConsoleInputComponent = require(`./ConsoleInputComponent.js`).ConsoleInputComponent;
const SnippetsContainerComponent = require(`../Snippets/SnippetsContainerComponent.js`).SnippetsContainerComponent;
const TreeViewComponent = require(`../TreeView/TreeViewComponent.js`).TreeViewComponent;
const Process = require(`../../services/Process`).Process;
const Bash = require(`../../model/Bash`).Bash;

export class ConsoleComponent extends React.Component {

    constructor(props) {
        super(props);
        this._key=0;
        this._path = props.path;
        this._outputs = [<ConsoleOutputComponent key="0"  console={this} text={"# Bienvenue dans le terminal"} />];
        this._process = new Process(new Bash(this));
    }
    /**
     * updates the input
     */
    updatePath(){
        this.refs.ConsoleInputComponent.changePath(process.cwd());
    }
    /**
     * @method insertOutput - creates a new ConsoleOutput with the provided text
     * @param {String} text - the text that need to be a new console input
     * @param {String} className - the string to give class to the component
     */
    insertOutput(text, className) {
        this._key += 1;
        this._outputs.push(<ConsoleOutputComponent key = {this._key}  console={this} className={className} text={text.toString() } />);
        this.forceUpdate();
    }

    insertInput(input){
        this.refs.ConsoleInputComponent.insertInput(input);
    }
    render() {

        return (
            <div className="consoleWrapper">
                <div className="treeViewWrapper">
                    <TreeViewComponent path={this._path} ref="treeView" parent={this} process={this._process} />
                </div>
                <div className="Console">
                    {this._outputs.map(output => output) }
                    <ConsoleInputComponent ref="ConsoleInputComponent" parent={this} process={this._process}/>
                </div>
                <SnippetsContainerComponent parent={this} process={this._process}/>
            </div>

        );
    }
}
