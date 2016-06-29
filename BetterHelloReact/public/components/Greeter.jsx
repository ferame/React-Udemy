var React = require('react');
var GreeterMessage = require('./GreeterMessage.jsx');
var GreeterForm = require('./GreeterForm.jsx');

var Greeter = React.createClass({ //container component
  getDefaultProps: function(){
    return{
      name: "React",
      message: "This is Default Message"
    };
  },
  getInitialState: function (){
    return{
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData:function(updates){ //e-event object handler
    this.setState(updates);
  },
  render:function(){
    // var name = this.props.name;
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }//render function is mandatory
}); //react method

module.exports = Greeter;
