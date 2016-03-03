"use strict";

const ReactDOM = require("react-dom");
const React = require("react");
const ConsoleOutputComponent = require("../components/ConsoleOutputComponent.jsx");



export class ConsoleClass {

  constructor(ConsoleInputId) {
    console.log("creating new instance of ConsoleClass");
    this._consoleInput = document.getElementById(ConsoleInputId);
    this._history = [];
    this.loadEvent();
  }
  loadEvent() {
    this._consoleInput.addEventListener("keydown", (keyEvent) => {
      if (keyEvent.keyIdentifier === "Enter" && this._consoleInput.value !== "")
        this.onEnterPress();
    });
  }
  onEnterPress() {
    let fullCommand = this._consoleInput.value;
    let ConsoleInput = document.getElementById("Console");
    this._history.push(fullCommand);
    console.log(fullCommand);
    let output = document.createElement("div");
    ReactDOM.render( <ConsoleOutputComponent text={fullCommand} />, output);
    console.log(output);
    ConsoleInput.insertBefore(output,ConsoleInput.childNodes[ConsoleInput.childNodes.length-1]);
    //let commandArray = fullCommand.split(" ").filter((elem,i)=>i!=0);

    //  console.log(commandArray);

    /*
      demander pourquoi marche quand écrit dans la console,
      mais pas de la code.
      ex : avec dir
    */
    /*  require("child_process").exec(fullCommand, (error, stdout, stdin) => {
        console.log("stdout",stdout);
        console.log("error",error);
        console.log("stdin",stdin);
    });*/

  }
}
