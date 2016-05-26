var React = require("react");
var ReactDOM = require("react-dom");

var Post = React.createClass({
  render: function(){
    return(
      <div>
        <section>Title {this.props.title}</section>
        <Comment body="This is a comment"/>
        <Comment body="This is also a comment"/>
      </div>
    );
  }
})

var Comment = React.createClass({
  render: function() {
    return(
      <p>{this.props.body}</p>
    )
  }
})

ReactDOM.render (
  <Post title="Hello"/>,
  document.getElementById("app")
)
