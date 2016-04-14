"use strict";

const React = require("react");
const HIGHLIGHT = require("react-highlight");


export class ConsoleOutputComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let className = `bash ${this.props.className}`;
        return (
            <HIGHLIGHT className= {className}>
                {this.props.text}
            </HIGHLIGHT>
        );
    }
}
