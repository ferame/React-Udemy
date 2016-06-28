var GreeterMessage = React.createClass({ //presentational component
  render:function(){
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name + '!!'}</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({ //presentational component
    onFormSubmit: function(e){
      e.preventDefault();
      var name = this.refs.nameInput.value;
      if(name.length > 0){
        this.refs.nameInput.value = '';
        this.props.onNewName(name);
      }
    },
    render:function(){
      return(
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="nameInput"/>
          <button>Set Name</button>
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
      name: this.props.name
    };
  },
  handleNewName:function(name){ //e-event object handler
    this.setState({
      name: name
    });
  },
  render:function(){
    // var name = this.props.name;
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }//render function is mandatory
}); //react method

var firstName = "Justin";

ReactDOM.render( //react dom method
  <Greeter name={firstName} message="This is a message"/>,
  document.getElementById('app')
);
