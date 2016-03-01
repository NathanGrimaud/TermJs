const React = require('react');
const Link = require('./LinkComponent.jsx');
module.exports = React.createClass({
  displayName: 'Menu',
  render: function() {
    return (
      <div className="Menu">
        <Link url='http://1' title='Hey' description='plop' />
        <Link url='http://2' title='Hey' description='plop' />

      </div>
    );
  }
});
