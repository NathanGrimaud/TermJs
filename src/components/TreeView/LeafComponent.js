
"use strict";

const React = require("react");

export class LeafComponent extends React.Component {
    constructor(props) {
        super(props);

       
    }   
    render() {
        return (
            <div className="leaf">{this.props.name}</div>
        );
    }
}
