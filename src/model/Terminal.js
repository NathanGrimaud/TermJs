"use strict";

const ReactDOM = require("react-dom");
const React = require("react");
const CONSOLE_COMPONENT = require("../components/ConsoleComponent.js");
const ConsoleOutputComponent = require("../components/ConsoleOutputComponent.js");
const exec = require("child_process").exec;

export class Terminal {

  constructor(Console, ConsuleInput, appContainer) {

    ReactDOM.render( < CONSOLE_COMPONENT /> , appContainer);
    this._console = document.getElementById(Console);
    this._consoleInput = document.getElementById(ConsuleInput);
    this._history = [];
    this._indexHistory = 0;
    this.loadEvent();

  }
  loadEvent() {
    this._consoleInput.addEventListener("keydown", (keyEvent) => {

      if (keyEvent.keyIdentifier === "Enter" && this._consoleInput.value !== "")

        this.onEnterPress();

      if (keyEvent.keyIdentifier === "Up" && this._history.length > 0) //-1

        this.onUpDownPress(-1);

      if (keyEvent.keyIdentifier === "Down" && this._history.length > 0) // +1

        this.onUpDownPress(1);
    });
  }
  onUpDownPress(value) {
    if (this._indexHistory >= 0 && this._indexHistory <= this._history.length) {

      this._consoleInput.value = this._history[this._indexHistory] !== undefined ? this._history[this._indexHistory] : "";

      if ((value === 1 && this._indexHistory + value <= this._history.length) || (value === -1 && this._indexHistory + value >= 0))

        this._indexHistory += this._indexHistory + value >= 0 ? value : 0;
    }
  }
  insertOutput(data){
    
    this._console.insertBefore(this.createOutput(data), this._console.childNodes[this._console.childNodes.length - 1]);

  }
  createOutput(data) {

    let output = document.createElement("div");
    console.log(data.toString("utf8"));
    ReactDOM.render( < ConsoleOutputComponent text = {data.toString("utf8")}/>, output);
      return output;

    }

    onEnterPress() {

      let fullCommand = this._consoleInput.value;
      this._history.push(fullCommand);
      this._indexHistory += 1;
      let commandArray = fullCommand.split(" ").filter((elem, i) => i !== 0);
      let firstCommand = fullCommand.split(" ")[0];

      if (firstCommand === "cd") {

        process.chdir(commandArray[0]);
        console.log(process.cwd());
        this._console.insertBefore(this.createOutput(process.cwd()), this._console.childNodes[this._console.childNodes.length - 1]);

      } else {

        exec(fullCommand, { encoding: "utf8",cwd: null,env: null },
        (err, stdout) => {
          if(err === null)
            this.insertOutput(stdout);
          else
            this.insertOutput(err);
        });

        this._consoleInput.value = "";
      }

    }
  }
