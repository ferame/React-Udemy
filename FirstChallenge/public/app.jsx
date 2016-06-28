var GreeterMessage = React.createClass({ //presentational component
  render:function(){
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello TEST {name + '!!'}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({ //presentational component
  onFormSubmit: function(e){
    e.preventDefault();
    var updates = {};
    var name = this.refs.nameInput.value;
    var message = this.refs.messageInput.value;
    if(name.length > 0){
      this.refs.nameInput.value = '';
      updates.name = name;
      // this.props.onNewName(name);
    };
    if(message.length > 0){
      this.refs.messageInput.value = '';
      updates.message = message;
      // this.props.onNewMessage(message);
    };
    this.props.onNewData(updates);
  },
  render:function(){
    return(
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="nameInput" placeholder="Enter name"/>
          </div>
          <div>
            <textarea form="usrform" type="text" ref="messageInput" placeholder="Enter message"></textarea>
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
    );
  }
});

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

var firstName = "Justin";
var firstMessage = "This is a message";

ReactDOM.render( //react dom method
  <Greeter name={firstName} message={firstMessage}/>,
  document.getElementById('app')
);
