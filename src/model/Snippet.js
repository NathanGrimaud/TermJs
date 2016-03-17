"use strict";
// const React = require('React');
const ReactDOM = require("react-dom");
const React = require("react");
const SNIPPET = require("../components/SnippetComponent");
const SNIPPETS_CONTAINER = require("../components/SnippetsContainer");
let data = require("../private/snippets.json");

export class SnippetClass {

    constructor(consoleInput, appContainer) {

        this._snippetsContainer = document.createElement("div");
        this._consoleInput = document.getElementById(consoleInput);

        this._sinppetsInstance = ReactDOM.render(
            <SNIPPETS_CONTAINER>
                {data.snippets.map((val) => <SNIPPET key={val.key} _console={this._consoleInput} name={val.name} command={val.command}/>) }
            </SNIPPETS_CONTAINER>, this._snippetsContainer);

        appContainer.appendChild(this._snippetsContainer);
    }
}
