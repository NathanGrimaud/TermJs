
"use strict";

const React = require("react");

export class BranchComponent extends React.Component {
    constructor(props) {
        super(props);

       
    }   
    render() {
        return (
            <div> {this.props.name}  </div>
        );
    }
}

