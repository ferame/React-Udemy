var React = require('react');

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

module.exports = GreeterForm;
