"use strict";

const React = require("react");

export class SnippetComponent extends React.Component {
    constructor(props) {
        super(props);

       this._parent = props.parent;
    }
    handleClick(evt) {      
        this._parent.insertInput(this.refs.command.innerText);
    }
    render() {
        return (
        <div onClick={evt=>this.handleClick(evt)} className='snippet' key="{this.props.key}">
            <span ref="name"  className="name">{this.props.name}: </span>
            <span ref="command" className="command">{this.props.command}</span>
        </div>
        );
    }
}

