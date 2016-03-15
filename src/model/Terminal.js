"use strict";

const ReactDOM = require("react-dom");
const React = require("react");
const CONSOLE_COMPONENT = require("../components/ConsoleComponent.js");
const ConsoleOutputComponent = require("../components/ConsoleOutputComponent.js");
const spawn = require("cross-spawn").spawn;

export class Terminal {

    constructor(Console, ConsuleInput, appContainer) {

        ReactDOM.render(< CONSOLE_COMPONENT />, appContainer);
        this._console = document.getElementById(Console);
        this._consoleInput = document.getElementById(ConsuleInput);
        this._history = [];
        this._indexHistory = 0;
        this.loadEvent();

    }
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

    stopCommand() {
        console.log("stop");
        if(this._runningCmd !== null && this._runningCmd !== undefined){
            console.log(this._runningCmd);
            this._runningCmd.kill("SIGINT");
        }
            
    }

    onUpDownPress(value) {

        if (this._indexHistory >= 0 && this._indexHistory <= this._history.length) {

            this._consoleInput.innerHTML = this._history[this._indexHistory] !== undefined ? this._history[this._indexHistory] : "";

            if ((value === 1 && this._indexHistory + value <= this._history.length) || (value === -1 && this._indexHistory + value >= 0))

                this._indexHistory += this._indexHistory + value >= 0 ? value : 0;
        }

    }
    insertOutput(data) {

        let output = this.createOutput(data);
        let refElement = this._console.childNodes[this._console.childNodes.length - 1];
        this._console.insertBefore(output, refElement);

    }
    createOutput(data) {

        let output = document.createElement("div");
        console.log(data.toString("utf8"));
        ReactDOM.render(< ConsoleOutputComponent text = {data.toString("utf8") } />, output);
        return output;

    }
    execCommand(comm, args) {

        return new Promise((resolve, reject) => {
            
            let command = spawn(comm, args, "utf8");
            
            this._runningCmd = command;
            
            
            command.stdout.on("data", (data) => {
                this.insertOutput(data);
            });

            command.on("error", (error) => {
                reject(error);
            });

            this._consoleInput.innerHTML = "";
            command.on("close", () => {
                this._runningCmd = null;
                resolve();
            });

        });


    }

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

        let fullCommand = this.getCommand(this._consoleInput.innerHTML);

        this._history.push(fullCommand.raw);
        this._indexHistory += 1;

        let firstCommand = fullCommand.command;
        let commandArray = fullCommand.args;

        if (firstCommand === "cd") {

            let destination = commandArray[0]
            this.execCD(destination);

        }
        else {
            this.execCommand(firstCommand, commandArray).then(
                ()=>console.log("command ended"),
                (error)=>console.log(error)
            )
        }

    }
}
