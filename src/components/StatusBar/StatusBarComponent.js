"use strict";
const React = require("react");
const GitStatusComponent = require("./GitStatusComponent.js").GitStatusComponent;
/**
 * an footer bar the shows usefull informations (suchas git status, number of files/dir in current workspace )
 */

export class StatusBarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
          <div className = "StatusBar">
            <div> </div>
            <GitStatusComponent path={this.props.path}/>
          </div>
        );
    }
}
