"use strict";
const React = require("react");

module.exports = React.createClass({
  displayName: "ConsoleOutputComponent",
  render: function() {
    return (
      <div className="ConsoleOutput">
        {this.props.text}
      </div>
    );
  }
});
