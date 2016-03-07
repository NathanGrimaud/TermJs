"use strict";
const React = require("react");
const Highlight = require("react-highlight");
module.exports = React.createClass({
  displayName: "ConsoleOutputComponent",
  render: function() {
    return (
        <Highlight className='bash'>
          {this.props.text}
        </Highlight>
    );
  }
});
