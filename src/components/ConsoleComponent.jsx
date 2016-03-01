const React = require('react');
const Link = require('./LinkComponent.jsx');
module.exports = React.createClass({
  displayName: 'Console',
  render: function() {
    return (
      <div className="Console">
        <div className="console">

        </div>
        <div id="console_input" >
          <input id="console_input" type="text" value=""></input>
        </div>
      </div>
    );
  }
});
