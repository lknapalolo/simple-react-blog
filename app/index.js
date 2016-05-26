var React = require("react");
var ReactDOM = require("react-dom");

var post = {
  title: "This is the title",
  author: "This is the author",
  body: "This is the post body",
  comments: {
    body: "Comment 1"
  }
}

var Post = React.createClass({
  render: function(){
    return(
      <div>
        <section>Title {this.props.title}</section>
        <section>Author {this.props.author}</section>
        <section>{this.props.body}</section>
        <Comment body={post.comments.body}/>
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
  <Post title={post.title} author={post.author} body={post.body}/>,
  document.getElementById("app")
)
