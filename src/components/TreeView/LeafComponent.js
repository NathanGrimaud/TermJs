
"use strict";

const React = require("react");
/**
 * class that represent a file in tree view
 */
export class LeafComponent extends React.Component {
    /**
     * @constructor
     * @param {Object} props - contains {parent , name}
     */
    constructor(props) {
        super(props);       
    }   
    render() {
        return (
            <div className="leaf">
             <i ref="icon" className="material-icons md-16 md-light" >description</i>
              <span className="nameText">{this.props.name}</span>
            </div>
        );
    }
}
