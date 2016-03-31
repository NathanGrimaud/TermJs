"use strict";

//mutiny on the bounty
//const pageLocation = process.cwd();


const React = require("react");
const ReactDOM = require("react-dom");

const CONSOLE_COMPONENT = require(`./dist/components/Console/ConsoleComponent`).ConsoleComponent;

class Main {

    constructor() {
        this.appContainer = document.getElementById("app");
    }

    loadConsole() {
        ReactDOM.render(<CONSOLE_COMPONENT/>, this.appContainer);
    }
}

window.onload = function() {
    let main = new Main();
    main.loadConsole();
};
