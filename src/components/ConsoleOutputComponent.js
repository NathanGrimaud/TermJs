"use strict";
const React = require("react");
//const Highlight = require("react-highlight");
module.exports = React.createClass({
  displayName: "ConsoleOutputComponent",
  render: function() {
    return (
        <div className='bash'>
          {this.props.text}
        </div>
    );
  }
});
