"use strict";
const React = require("react");

export class SnippetComponent extends React.Component {
    constructor(props) {
        super(props);
        /**
         * not sure this is the best way but ... it works
         */
        this._handleClick = this.handleClick.bind(this);
    }
    handleClick(evt) {
        this.props._console.innerHTML = this.props.command;
    }
    render() {
        return (
        <div onClick={this._handleClick} className='snippet' key="{this.props.key}">
            <span  className="name">{this.props.name}: </span>
            <span className="command">{this.props.command}</span>
        </div>
        );
    }
}

