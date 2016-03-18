"use strict";

const ReactDOM = require("react-dom");
const React = require("react");
const CONSOLE_COMPONENT = require("../components/ConsoleComponent.js");
const ConsoleOutputComponent = require("../components/ConsoleOutputComponent.js");
const spawn = require("cross-spawn").spawn;
const exec = require("child_process").exec;


export class Terminal {

    constructor(Console, ConsuleInput, appContainer) {

        this._consoleComponent = ReactDOM.render(< CONSOLE_COMPONENT />, appContainer);
        this._console = document.getElementById(Console);
        this._consoleInput = document.getElementById(ConsuleInput);
        this._history = [];
        this._indexHistory = 0;
        this.loadEvent();
    }
    /**
     * Terminal.loadEvent :
     * 
     * loads all keyboards events related to a terminal
     */
    loadEvent() {
        this._consoleInput.addEventListener("keydown", (keyEvent) => {

            if (keyEvent.keyIdentifier === "Enter" && this._consoleInput.innerHTML !== "")

                this.onEnterPress();

            if (keyEvent.keyIdentifier === "Up" && this._history.length > 0) //-1

                this.onUpDownPress(-1);

            if (keyEvent.keyIdentifier === "Down" && this._history.length > 0) // +1

                this.onUpDownPress(1);

            // c key = U+0043
            if (keyEvent.keyIdentifier === "U+0043" && keyEvent.ctrlKey) // +1

                this.stopCommand();

        });
    }
    /**
    * terminal.isWindows : 
    * return true if app is running on window
    */
    isWindows() {

        return /^win/.test(process.platform);

    }
    /**
     * terminal.stopCommand : 
     * 
     * stops a process if one is running in background
     * 
     * window don't allow to kill directly from PID,
     * need to lunch a taskill command
     */
    stopCommand() {

        if (this._runningCmd !== null && this._runningCmd !== undefined) {

            this._runningCmd.stdin.pause();
            let pid = this._runningCmd.pid;

            if (!this.isWindows())
                this._runningCmd.kill(pid);
            else
                exec('taskkill /PID ' + this._runningCmd.pid + ' /T /F', (err, stdout, stderr) => {
                    console.log(err);
                    console.log(stdout);
                    console.log(stderr);
                });

        }
    }

    onUpDownPress(value) {

        if (this._indexHistory >= 0 && this._indexHistory <= this._history.length) {

            this._consoleInput.innerHTML = this._history[this._indexHistory] !== undefined ? this._history[this._indexHistory] : "";

            if ((value === 1 && this._indexHistory + value <= this._history.length) || (value === -1 && this._indexHistory + value >= 0))

                this._indexHistory += this._indexHistory + value >= 0 ? value : 0;
        }

    }
    insertOutput(data,className) {


        let output = this.createOutput(data,className);
        let refElement = this._console.childNodes[this._console.childNodes.length - 1];
        this._console.insertBefore(output, refElement);

    }
    createOutput(data,className) {
        if(className===undefined)
            className="";
        let output = document.createElement("div");
        ReactDOM.render(< ConsoleOutputComponent className={className} text = {data.toString("utf8") } />, output);
        return output;

    }
    /**
     * Terminal.execCommand : 
     * 
     * execs a command , needs 2 params, cmd and arguments array
     */
    execCommand(comm, args) {

        return new Promise((resolve, reject) => {

            let command = spawn(comm, args, "utf8", { detached: true });

            this._runningCmd = command;

            command.stdout.on("data", (data) => {
                
               if(data !== undefined);
                    this.insertOutput(data,"output");
                    
            });
            
            command.stderr.on("data", (data) => {
                
                if (data !== undefined)
                    this.insertOutput(data,"output");
                    
            });

            command.on("error", (error) => {
                reject(error);
            });

            command.on("close", () => {
                this._runningCmd = null;
                resolve();
            });

        });
    }
    /**
     * Moves current directory to parameter
     * 
     * spawning cd isn't working, so need to use node.chdir
     */

    execCD(destination) {

        process.chdir(destination);
        let output = this.createOutput(process.cwd());
        let refElem = this._console.childNodes[this._console.childNodes.length - 1];
        this._console.insertBefore(output, refElem);
        
    }

    getCommand(rawCommand) {
        
        return {
            "raw": rawCommand,
            "command": rawCommand.split(" ")[0],
            "args": rawCommand.split(" ").filter((elem, i) => i !== 0)
        }
        
    }
    onEnterPress() {

        this._consoleComponent.changePath();

        let fullCommand = this.getCommand(this._consoleInput.innerHTML);

        this._history.push(fullCommand.raw);
        this._indexHistory += 1;

        let firstCommand = fullCommand.command;
        let commandArray = fullCommand.args;

        this._consoleInput.innerHTML = "";

        let raw = process.cwd() + " : " + fullCommand.raw ;
        
        this.insertOutput(raw, "raw");


        if (firstCommand === "cd") {

            let destination = commandArray[0]
            this.execCD(destination);

        }
        else {
            this.execCommand(firstCommand, commandArray)
                .then(
                () => console.log("command ended"),
                (error) => console.log("___",error,"____")
                )
        }
    }
}
