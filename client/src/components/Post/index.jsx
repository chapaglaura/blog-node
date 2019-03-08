import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author: ""
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    axios.get(`/api/posts/${id}`).then(response => {
      const data = response.data;
      console.log(data);
      const { title, body, author } = response.data[0];
      this.setState({
        title,
        body,
        author
      });
    });
  }

  deletePost = () => {
    const {id} = this.props.match.params;
    axios.delete(`/api/posts/${id}`).then(response => {
      this.props.history.push("/");
    })
  }

  render() {
    console.log("rerender", this.state);
    const { id } = this.props.match.params;
    return (
      <div className="my-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{this.state.title}</h1>
            <p className="lead">by {this.state.author}</p>
            <Link to={`/posts/edit/${id}`}>Edit post</Link>
          </div>
        </div>
        <div className="container">
          <p>{this.state.body}</p>
          <a href="#" onClick={this.deletePost}>Delete Post</a>
        </div>
      </div>
    );
  }
}

export default Post;
