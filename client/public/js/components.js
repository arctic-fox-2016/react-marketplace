var Comment = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();
    var dataId = this.props.dataId;
    var r = confirm("serius mau delete ?")
    if(r){
      $.ajax({
        url: "/api/deletecomments",
        dataType: 'json',
        type: 'POST',
        data: {dataId:dataId},
        cache: false,
        success: function(data){
          console.log(data);
        }
      });
    }
  },
  rawMarkup: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return {__html: rawMarkup};
  },
  render: function(){
    return(
      <div className="comment">
      <h2 className="commentAuthor">
      {this.props.author}
      </h2>
      <span dangerouslySetInnerHTML={this.rawMarkup()} />
      <button id={this.props.dataId} onClick={this.handleSubmit} value="Delete">Delete</button>


      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    console.log("test props",this.props.data)
    var commentNodes = this.props.data.map(function(comment){
      return(
        <Comment author={comment.author} key={comment.id} dataId={comment.id}>
        {comment.text}
        </Comment>
      )
    });
    return(
      <div className="commentList">
      {commentNodes}
      </div>
    )
  }
});

var CommentForm = React.createClass({
  getInitialState: function() {
    return {author: '', text: ''};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e){
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if(!text || !author){
      return;
    }
    console.log(this.props);
    this.props.onCommentSubmit({author: author, text: text});
    this.setState({author: '', text: ''});
  },
  render: function(){
    return(
      <li className="rounded-list">
        <div className="row">
        <div className="col-xs-1 text-center">
          <a>
            <span className="glyphicon glyphicon-minus-sign icon-list" aria-hidden="true"></span>
          </a>
        </div>
        <div className="col-xs-11 text-left">
          <form className="CommentForm" onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="your name"
          value={this.state.author}
          onChange={this.handleAuthorChange} />
          <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange} />
          <input type="submit" value="Post" />
          </form>
        </div>
        </div>
      </li>
    )
  }
});

var CommentBox = React.createClass({
  loadCommentsFromServer: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  handleCommentSubmit: function(comment){
    var comments = this.state.data;
    comment.id = Date.now();
    var newComments = comments.concat([comment]);
    this.setState({data: newComments});
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      type: 'POST',
      data: comment,
      success: function(data){
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({data: comments});
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function(){
    return {data: []};
  },
  componentDidMount: function(){
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer, this.props.pollInterval);
  },
  render: function(){
    return(
      <div className="commentBox">
      <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading"><h1>Hacktiv8 Comments Apps</h1></div>
        <div className="panel-body">
        <ul>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </ul>
        </div>
      </div>
      </div>
      </div>
    )
  }
});

ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={1} />,
  document.getElementById('content')
);
