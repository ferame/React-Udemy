var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = require('./components/Greeter.jsx');

var firstName = "Justin";
var firstMessage = "This is a message";

ReactDOM.render( //react dom method
  <Greeter name={firstName} message={firstMessage}/>,
  document.getElementById('app')
);
