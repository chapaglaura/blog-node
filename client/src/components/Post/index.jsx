import React, { Component } from "react";
import axios from "axios";

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
    axios.get(`/posts/${id}`).then(response => {
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

  render() {
    console.log("rerender", this.state);
    return (
      <div className="my-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">{this.state.title}</h1>
            <p className="lead">by {this.state.author}</p>
          </div>
        </div>
        <div className='container'>
          <p>{this.state.body}</p>
        </div>
      </div>
    );
  }
}

export default Post;
