"use strict";
const React = require("react");

/**
* an footer bar the shows usefull informations (suchas git status, number of files/dir in current workspace )
*/

export class GitStatusComponent extends React.Component{

  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    return(
      <div className="GitStatus">

      </div>
    );
  }
}
