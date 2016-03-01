const React = require('react');

module.exports = React.createClass({
 displayName: 'Link',
 render: function() {
   return (
     <div className="link">
      <h3><a href={this.props.url}>{this.props.title}</a></h3>
      <p>{this.props.description}</p>
     </div>
   );
 }
});
